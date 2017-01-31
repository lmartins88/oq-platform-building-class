/*
  TODO:

  - occupancies
    DONE . show tab when create
    DONE . title for images
    DONE . move to next step
    DONE . re-edit again
    DONE . readonly: occupancies (with update)
    . send to server
    . server management
    . reload from server
    . to_save flag & prevent page adbandon

  DONE - countries
  DONE - remove countries blocks
  DONE - hide trees
  DONE - insert new as first (.prepend)
  DONE = import other trees descr.
  DONE - produce tables with flat version and dropdown with frequencies for Urban and Rural
  DONE - disclaimer
  DONE - data json creation
  DONE - django model
  DONE - send data as json object
  DONE - save/modify/delete rows
  DONE - populate the page with already inserted data
  DONE - json to js => done
  DONE - populate the page
  DONE - security issues
  DONE - disclaimer when not logged
  DONE - styling

  - recursive unclick require confirm


  NEXT ITERATION:
  - digest mail with new entries
  - admin view
*/

var gem_bcs_transl = {};
var gem_bcs_transl_id = "en";
var gem_occupancy_names = ['residential', 'commercial', 'industrial', 'educational', 'healthcare', 'governmental'];

function __(id) {
    if (id in gem_bcs_transl[gem_bcs_transl_id])
        return gem_bcs_transl[gem_bcs_transl_id][id];
    else if (id in gem_bcs_transl["en"])
        return gem_bcs_transl["en"][id];
    else
        return id;
}

function node_lang_update(index)
{
    var node_id = $(this).attr('data-gem-id');
    $(this).children('span[name="descr"]').text(__(node_id));
}

function tree_lang_update(index)
{
    var tit = $(this).find('p[name="title"]')[0];
    $(tit).text(__($(tit).attr('data-gem-country')));
    $(this).children('span[name="descr"]').text(__('material'));
    $(this).find('li[name="node"]').each(node_lang_update);
}


function lang_update() {
    // country names
    $('select#country-id > option').each(function (idx) {$(this).text(__($(this).attr('value'))); });
    $('button#new-classification').text(__('new classification'))

    $('div#forest > div[name="tree"]').each(tree_lang_update);
}

function language_change_cb() {
    gem_bcs_transl_id = $(this).val();
    lang_update();
}

function choices_create(item, model)
{
    var $grp;
    var li = [];

    if (model.sub == null)
        return;
    $grp = $('<div>', { 'name': 'sub' });
    $grp.append($('<p>', { 'class': 'sub-title', 'text': __(model.sub.name) }));
    $ul = $('<ul>');

    for (i in model.sub.el) {
        var checkbox = $('<input>', {'type': 'checkbox', 'name': model.sub.el[i].name, 'class': 'checkbox'});
        checkbox[0].data_gem_model = model.sub.el[i];

        checkbox.on('click', checkbox_click_cb);

        li.push($("<li>", {'name': 'node', 'data-gem-id': model.sub.el[i].name}).append(
            checkbox, $("<span>", {'name': 'descr', 'text': __(model.sub.el[i].name)})));
    }
    $(item).append($grp.append($ul.append(li)));
}

function frequency_ddown_create(name)
{
    var freq = [ 'inexistent', 'rare', 'moderately freq.', 'frequent', 'very frequent'];
    var freq_id = [ 'inex', 'rare', 'modr', 'freq', 'very'];
    var defa = "frequent";

    var $sel = $('<select>', { 'name': name, 'class': 'frequency' });
    var $opt;

    for (var i = 0 ; i < freq.length ; i++) {
        $opt = $('<option>', { 'value': freq_id[i], 'text': __(freq[i]) });
        if (freq[i] == defa) {
            $opt.attr('selected', 'selected');
        }
        $sel.append($opt);
    }
    return $sel;
}

function build_classes_update(checkbox) {
    var $tree, $leafs, $leaf, line, build_classes_new = [];
    var i, e, o, $table, $rows, $tr, sep = " | ", descr;

    $tree = $(checkbox).parents('div[name="tree"]');
    $leafs = $tree.find('input[type="checkbox"]:checked:not(:has(~ div input[type="checkbox"]:checked))');

    for (i = 0 ; i < $leafs.length ; i++) {
        $leaf =  $($leafs[i]);
        build_classes_new[i] = [];
        do {
            build_classes_new[i].push($leaf.attr('name'));
            if ($leaf.parent().attr('data-gem-base') != undefined) {
                break;
            }
            $leaf = $leaf.parent().parent().parent().parent().children('input[type="checkbox"]');
        } while (true);
    }

    $table = $tree.find("table[name='build_classes']");

    // set all rows as not checked
    $table.find("tr[name='path']").each(function () { this.checked = false });
    // check if rows are already present
    for (i = 0 ; i < build_classes_new.length ; i++) {
        $rows = $table.find("tr[name='path']");
        for (e = 0 ; e < $rows.length ; e++) {
            // console.log("I:" + i + " E:" + e + " Len(i): " +
            //            $rows[e].data_gem_path.length + " Len(e): " +  build_classes_new[i].length);
            if ($rows[e].data_gem_path.length != build_classes_new[i].length) {
                // if build_classes has different length are not the same, continue
                continue;
            }
            for (o = 0 ; o < build_classes_new[i].length ; o++) {
                if ($rows[e].data_gem_path[o] != build_classes_new[i][o])
                    break;
            }
            if (o < build_classes_new[i].length) {
                // some element of arrays not matches, continue
                continue;
            }
            $rows[e].checked = true;
            break;
        }
        if (e == $rows.length) {
            // build_classes_new[i] not already exists in the table, create it
            descr = "";
            for (o = (build_classes_new[i].length - 1) ; o >= 0 ; o--) {
                // console.log(build_classes_new[i][o]);
                if (build_classes_new[i][o] != "Unknown") {
                    descr += (o == (build_classes_new[i].length - 1) ? "" : sep) +
                        __(build_classes_new[i][o]);
                }
            }
            $td = $("<td>", { "text": descr, "class": "path" });
            $tr = $("<tr>", { "name": "path" });
            $tr[0].data_gem_path = build_classes_new[i].slice(0);
            $tr[0].checked = true;
            $tr.append($td,
                       $('<td>').append(frequency_ddown_create('urban')),
                       $('<td>').append(frequency_ddown_create('rural')));
            $table.find("tr[name='titles']").after($tr);
        }
    }
    $table.find("tr[name='path']").each(function () { if(!this.checked) $(this).remove() });
    if ($table.find("tr[name='path'], tr[name='path-ro']").length > 0)
        $table.show();
    else
        $table.hide();
}

function checkbox_click_cb() {
    var item = $(this).parent();
    if (this.checked) {
        var model = this.data_gem_model;
        var choices;

        var sub = $(item).children('div[name="sub"]');
        if (sub.length == 0) {
            // create a sub object with choices
            choices = choices_create(item, model);
        }
        else {
            sub.show();
        }
    }
    else { // try to hide subgroup (if no other sub checkbox are checked)
        var checked = $(item).find('input[type="checkbox"]:checked');
        if (checked.length == 0) {
            var sub = $(item).children('div[name="sub"]');
            sub.hide();
        }
        else {
            alert('Uncheck all sub-items before it');
            return false;
        }
    }
    build_classes_update(this);
}

function gem_modal_confirm(obj, title, content, success_cb, error_cb) {
    var $dial;

    $dial = $('<div>', { 'title': title, 'text': content });
    $('body').append($dial);
    var buttons = {}

    buttons[__("yes")] = function() {
        success_cb(obj);
        $(this).dialog("close");
        $dial.remove();
    };
    buttons[__("no")] = function() {
        error_cb(obj);
        $(this).dialog("close");
        $dial.remove();
    };

    $dial.dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: buttons
    });
}

function gem_modal_alert(title, content) {
    var $dial;

    $dial = $('<div>', { 'title': title, 'text': content });
    $('body').append($dial);
    var buttons = {}

    buttons[__("ok")] = function() {
        $(this).dialog("close");
        $dial.remove();
    };

    $dial.dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: buttons
    });
}




function classification_del_cb() {
    var country = $(this).parent().find("p[name='title']").text();

    var success_cb = function(obj) {
        $(obj).parent().remove();
        if ($('div#forest > div[name="tree"]').length == 0) {
            $("button[name='save']").hide();
        }
    };

    var error_cb = function(obj) {
    };

    gem_modal_confirm(this, "Delete Classification",
                      __("Do you really want to delete '") + country + __("' classification?"),
                      success_cb, error_cb);
}


function classification_del_cb_old() {
    var country = $(this).parent().find("p[name='title']").text();
    if (confirm(__("Do you really want to delete '") + country + __("' classification?"))) {
        $(this).parent().remove();
        if ($('div#forest > div[name="tree"]').length == 0) {
            $("button[name='save']").hide();
        }
    }
}

function cascade_showhide(to_show, $notes, $cascade, $button) {
    if (to_show == false) {
        $cascade.hide();
        if ($notes.find("textarea[name='notes']").val().trim() == "") {
            $notes.hide();
        }

        $button.html(__('show'));
        $button.attr('data-gem-show', 'false');
    }
    else {
        $cascade.show();
        $notes.show();
        $button.html(__('hide'));
        $button.attr('data-gem-show', 'true');
    }
}


function cascade_showhide_cb() {
    var to_show = $(this).attr('data-gem-show') != 'true';
    var $tree, $notes, $cascade;

    $button = $(this);
    $tree = $button.parents("div[name='tree']");
    $notes = $tree.find("div[name='notes']");
    $cascade = $tree.find("div[name='cascade']");

    cascade_showhide(to_show, $notes, $cascade, $(this));
}

function occupancies_showhide_cb() {
    var $tree = $(this).parents("div[name='tree']");
    classification_tab_show($tree, 'occupancies');
}

function classification_tab_show($tree, tab_name)
{
    // 'occupancies', 'operational'
    var $occ = $tree.find("div[name='occupancies']");
    var $ope = $tree.find("div[name='operational']");
    var $casc_btn = $tree.find("button[name='cascade_showhide']");
    var $occ_btn = $tree.find("button[name='occupancies_showhide']");

    if (tab_name == 'occupancies') {
        $occ.show();
        $ope.hide();
        $casc_btn.hide();
        $occ_btn.hide();
    }
    else if (tab_name == 'operational') {
        $occ.hide();
        $ope.show();
        $casc_btn.show();
        $occ_btn.show();
    }
}

function occupancy_img_cb()
{
    var par = $(this).parent();
    var cbox = par.children('checkbox');
    var img = par.children('img');

    if (cbox.is(":checked")) {
        cbox.prop('checked', false);
        img.removeClass('sel');
    }
    else {
        cbox.prop('checked', true);
        img.addClass('sel');
    }
};

function occupancy_cb()
{
    var par = $(this).parent();
    var cbox = par.children("input[type='checkbox']");
    var img = par.children('img');
    var is_checked = cbox.is(":checked");

    if (this.tagName != 'IMG') {
        is_checked = !is_checked;
    }

    if (is_checked) {
        cbox.prop('checked', false);
        par.removeClass('sel');
    }
    else {
        cbox.prop('checked', true);
        par.addClass('sel');
    }
};

function occupancies_item_add(occ_name)
{
    var td = $('<td>');
    var cbox = $('<input>', {'type':'checkbox', 'name': occ_name});
    var img = $('<img>', {'src': gem_static_url + '/building-class/img/120/' + occ_name + '.png',
                          'title': __(occ_name)});

    cbox.on('click', occupancy_cb);
    img.on('click', occupancy_cb);
    td.append(cbox, img);

    return td;
};

function occupancies_get($tree)
{
    var occupancies = [];

    for (var i = 0 ; i < gem_occupancy_names.length ; i++) {
        if ($tree.find("div[name='occupancies'] input[type='checkbox'][name='" + gem_occupancy_names[i] + "']"
                     ).is(':checked')) {
            occupancies.push(gem_occupancy_names[i]);
        }
    }

    return occupancies;
}

function occupancies_ro_set(occupancies_ro_ctx, occupancies)
{
    occupancies_ro_ctx.empty();
    for (var i = 0 ; i < occupancies.length ; i++) {
        occ_name = occupancies[i];

        occupancies_ro_ctx.append($('<img>', {'src': gem_static_url + '/building-class/img/60/' + occ_name + '.png',
                                              'title': __(occ_name)}));
    }
}

function occup_next_btn_cb()
{
    var $tree = $(this).parents("div[name='tree']");
    var occupancies;

    occupancies = occupancies_get($tree);

    if (occupancies.length == 0) {
        gem_modal_alert(__('occupancies'), __('At least one occupancy type must be selected.'));
        return;
    }
    occupancies_ro_set($tree.find("div[name='occupancies_ro_ctx']"), occupancies);

    classification_tab_show($tree, 'operational');
}

function classification_add(country) {
    var li = [];
    var notes = "";
    var occupancies = [];
    var occupancies_view = true;
    var build_classes = [];
    var show = true;
    var is_table_visible = false;

    // console.log("CLASSIFICATION ADD");
    if (arguments.length == 5) {
        occupancies = arguments[1];
        notes = arguments[2];
        build_classes = arguments[3];
        show = arguments[4];
    }

    if (occupancies.length > 0) {
        occupancies_view = false;
    }

    var material, materials = ['Masonry', 'Concrete', 'Steel', 'Composite', 'Wood'];
    for (k in materials) {
        material = materials[k];

        var checkbox = $('<input>', {'type': 'checkbox', name: material, 'class': 'checkbox'});
        checkbox[0].data_gem_model = gem_bcs_tree_descr[material.toLowerCase()];

        checkbox.on('click', checkbox_click_cb);

        li.push($("<li>", {'name': 'node', 'data-gem-id': material,
                           'data-gem-base': 'true'}).append(
            checkbox, $("<span>", {'name': 'descr', 'class': 'gem_capitalize',
                                   'text': __(material)})));
    }

    var del_btn = $('<button>', {'name': 'delete', 'class': 'classification_del', 'text': __('delete') });
    del_btn.on('click', classification_del_cb);
    var cascade_showhide_btn = $('<button>', {'name': 'cascade_showhide', 'class': 'cascade_showhide',
                                              'data-gem-show': 'true', 'text': __('hide') });
    cascade_showhide_btn.on('click', cascade_showhide_cb);
    if (occupancies_view)
        cascade_showhide_btn.hide();

    var occupancies_showhide_btn =  $('<button>', {'name': 'occupancies_showhide', 'class': 'occupancies_showhide',
                                          'data-gem-show': 'true', 'text': __('occupancies') });
    occupancies_showhide_btn.on('click', occupancies_showhide_cb);
    if (occupancies_view)
        occupancies_showhide_btn.hide();

    var $table = $("<table>", {"name": "build_classes", "class": "build_classes"}).append(
        $("<tr>", {"name": "titles"}).append($("<th>", {"text": __("building type")}),
                                             $("<th>", {"text": __("urban") }),
                                             $("<th>", {"text": __("rural") }))
    );

    if (build_classes.length == 0)
        $table.hide();

    var occupancies_tab = $('<table>', {'class': 'occupancies_mod'});
    var tr = null;
    for (var i = 0 ; i < 6 ; i++) {
        if (i == 0 || i == 3) {
            tr = $('<tr>');
        }
        tr.append(occupancies_item_add(gem_occupancy_names[i]));
        if (i == 2 || i == 5) {
            occupancies_tab.append(tr);
        }
    }

    occupancies_div = $('<div>', {'name': 'occupancies'});
    occup_next_btn = $('<button>', {'name': 'next', 'class': 'occup_next_btn', 'text': __('next') });
    occup_next_btn.on('click', occup_next_btn_cb);

    occupancies_div.append($('<p>', {'name': 'occupancies_descr',
                                     'text': __('What type of building occupancy will you characterise ?')}),
                           occupancies_tab,
                           $('<div>').append(occup_next_btn));

    if (! occupancies_view)
        occupancies_div.hide();

    var occupancies_ro_ctx = $('<div>', {'name': 'occupancies_ro_ctx', 'class': 'occupancies_ro_ctx'});

    occupancies_ro_set(occupancies_ro_ctx, occupancies);

    var operational_div = $('<div>', {'name': 'operational'}).append(
        $('<div>', { 'name': 'occupancies_ro', 'class': 'occupancies_ro'}).append(
            $('<p>', {'class': 'classification_occupancies', 'text': __('occupancies')}),
            occupancies_ro_ctx
        ),
        $('<div>', { 'name': 'notes', 'class': 'notes'}).append(
            $('<p>', {'class': 'classification_notes', 'text': __('notes')}),
            $('<p>', {'class': 'classification_notes'}).append(
                $('<textarea>', {'name': 'notes', 'maxlength': '1024',
                                 'class': 'classification_notes', 'value': notes}))
        ),
        $('<div>', {'name': 'cascade'}).append(
            $('<p>', {'name': 'descr', 'class': 'sub-title',
                      'text': __('Material')}),
            $("<ul>").append(li)),
        $table);
    if (occupancies_view)
        operational_div.hide();

    console.log(occupancies_div);

    $tree = $("<div>", {'name': 'tree', 'class': 'tree', 'data-gem-country': country}).append(
        $('<p>', {'name': 'title', 'data-gem-country': country,
                  'class': 'classification_title', 'text': __(country)}),
        del_btn, cascade_showhide_btn, occupancies_showhide_btn,
        occupancies_div, operational_div
    );

    $notes = $tree.find("div[name='notes']");
    $cascade = $tree.find("div[name='cascade']");

    cascade_showhide(show, $notes, $cascade, cascade_showhide_btn);

    if (arguments.length == 1)
        $("div#forest").prepend($tree);
    else
        $("div#forest").append($tree);

    for (var i = 0 ; i < build_classes.length ; i++) {
        var build_class = build_classes[i];
        var atoms = build_class.path.split('|');
        var atom, $ul, $li, $cbox;

        console.log(build_class);

        $ul = $cascade.children("ul");
        var not_found = false;
        var tr_created = false;
        var click_revert = [];

        for (var e = atoms.length - 1 ; e >= 0 ; e--) {
            atom = atoms[e];
            $li = $ul.children("li[name='node'][data-gem-id='" + atom + "']");
            if ($li.length == 0) {
                not_found = true;
                if (tr_created) {
                    $table.find("tr[name='path']").first().remove();
                }
                break;
            }
            $cbox = $li.children("input[type='checkbox'][name='" + atom + "']");
            if (! $cbox.is(':checked')) {
                click_revert.push($cbox);
                $cbox.prop('checked', true).triggerHandler('click');
                tr_created = true;
            }
            $ul = $li.children("div[name='sub']").children("ul");
        }
        if (not_found) {
            var sep = ' | ';
            for (var e = (click_revert.length - 1) ; e >= 0 ; e--) {
                click_revert[e].prop('checked', false).triggerHandler('click');
            }
            // build_classes_new[i] not already exists in the table, create it
            var descr_txt = "";
            var legacy = $("<span>", {"class": 'legacy', 'text': __('LEGACY (Vers.') +
                                      build_class['vers'] + __(')')});
            for (o = (atoms.length - 1) ; o >= 0 ; o--) {
                atom = atoms[o];

                // console.log(build_classes_new[i][o]);
                if (atom != "Unknown") {
                    descr_txt += (o == (atoms.length - 1) ? "" : sep) +
                        __(atom);
                }
            }
            $td = $("<td>", { "class": "path" });
            $td.append($('<span>', { 'text': descr_txt }), legacy);
            $tr = $("<tr>", { "name": "path-ro" });
            $tr[0].data_gem_path = atoms.slice(0);
            $tr[0].checked = true;
            $tr.append($td,
                       $('<td>').append(frequency_ddown_create('urban')),
                       $('<td>').append(frequency_ddown_create('rural')));
            $table.append($tr);
        }
        else {
            $tr = $table.find("tr[name='path']").first();
        }
        $tr.find("select[name='urban']").val(build_class.urban);
        $tr.find("select[name='rural']").val(build_class.rural);
        is_table_visible = true;
    }

    for (var i = 0 ; i < occupancies.length ; i++) {
        occupancies_div.find("input[type='checkbox'][name='" + occupancies[i] + "']"
                            ).prop('checked', true).triggerHandler('click');
    }

    if (is_table_visible)
        $table.show();

    $("button[name='save']").show();
}

function classification_add_cb() {
    var country = $("select#country-id").val();

    classification_add(country);
}




function build_class2obj(bc_row)
{
    var obj = { path: "", urban: "", rural: "" };
    var path = bc_row.data_gem_path;

    for (var i = 0 ; i < path.length ; i++) {
        obj.path += (i == 0 ? "" : "|") + path[i];
    }
    obj.urban = $(bc_row).find("select[name='urban']").val();
    obj.rural = $(bc_row).find("select[name='rural']").val();

    return obj;
}

function tree2obj(idx, tree)
{
    var obj = { country: "", notes: "", build_classes: [] };
    var $bc_rows = $(tree).find("table[name='build_classes']").find("tr[name='path']");
    var $bc_rows_ro = $(tree).find("table[name='build_classes']").find("tr[name='path-ro']");
    var bc_idx, bc_row;

    obj.country = $(tree).find("p[name='title']").attr("data-gem-country");
    obj.notes = $(tree).find("textarea[name='notes']").val();

    for (bc_idx = ($bc_rows.length - 1) ; bc_idx >= 0 ; bc_idx--) {
        bc_row = $bc_rows[bc_idx];
        obj.build_classes.push(build_class2obj(bc_row));
    }

    for (bc_idx = 0 ; bc_idx < $bc_rows_ro.length ; bc_idx++) {
        bc_row_ro = $bc_rows_ro[bc_idx];
        obj.build_classes.push(build_class2obj(bc_row_ro));
    }

    return obj;
}

function save_resp_clean()
{
    $("div[name='save_resp']").html("<br>");
    $("div[name='save_resp']").attr("class", "");
}

function save_cb()
{
    var tree, $trees = $("div#forest div[name='tree']");
    var obj = {};
    obj.classifications = [];

    for (idx = 0 ; idx < $trees.length ; idx++) {
        tree = $trees[idx];
        obj.classifications.push(tree2obj(idx, tree));
    }

    $.ajax({
        type: 'post',
        contentType: 'application/json',
        dataType: 'json',
        url: 'data',
        data: JSON.stringify(obj),
        success: function (resp) {
            $("div[name='save_resp']").text(resp.ret_s);
            if (resp.ret == 0)
                $("div[name='save_resp']").attr("class", "save_resp_ok");
            else
                $("div[name='save_resp']").attr("class", "save_resp_err");
            setTimeout(save_resp_clean, 3000);
        },
        error: function (response) {
            $("div[name='save_resp']").text(resp.ret_s);
            if (resp.ret == 0)
                $("div[name='save_resp']").attr("class", "save_resp_ok");
            else
                $("div[name='save_resp']").attr("class", "save_resp_err");
            setTimeout(save_resp_clean, 3000);
        },
    });

}

function user_settings_cb()
{
    window.location.href = 'user-settings';
}

$(document).ready(function building_class_main() {
    // gem_bcs_transl_id = $('select#language-id').val();
    $('button#new-classification').on('click', classification_add_cb);
    $('button#user-settings').on('click', user_settings_cb);
    $('select#language-id').on('change', language_change_cb);
    $("button[name='save']").on('click', save_cb);
    lang_update();
    for (var i = 0 ; i < gem_bcs_classifications.length ; i++) {
        var classification = gem_bcs_classifications[i];
        classification.occupancies = ['residential', 'industrial', 'educational', 'healthcare'];
        classification_add(classification.country, classification.occupancies, classification.notes, classification.build_classes, false);
    }
})
