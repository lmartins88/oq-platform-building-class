/*
   Copyright (c) 2017, GEM Foundation.

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU Affero General Public License as
      published by the Free Software Foundation, either version 3 of the
      License, or (at your option) any later version.

      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU Affero General Public License for more details.

      You should have received a copy of the GNU Affero General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

gem_bcs_tree_descr['composite'] = { "sub": {
  "el": [
   { "sub": {
     "el": [
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Moment frame" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Infilled frame" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Wall" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Dual system" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Braced frame" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Unknown" }
     ],  "type": "group", "name": "Lateral load resisting  system" }, 
    "type": "choice", "name": "Cast in place" }, 
   { "sub": {
     "el": [
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Moment frame" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Infilled frame" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Wall" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Dual system" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Braced frame" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Unknown" }
     ],  "type": "group", "name": "Lateral load resisting  system" }, 
    "type": "choice", "name": "Pre-cast" }, 
   { "sub": {
     "el": [
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Moment frame" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "sub": {
                 "el": [
                  { "type": "choice", "name": "Concrete block" }, 
                  { "type": "choice", "name": "Ceramic brick" }, 
                  { "type": "choice", "name": "Unknown" }
                 ],  "type": "group", "name": "Type of block" }, 
                "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Infilled frame" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Wall" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Dual system" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Braced frame" }, 
      { "sub": {
        "el": [
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Low rise (<3 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Mid rise (4-6 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "High-rise (7-12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Tall (>12 floors)" }, 
         { "sub": {
           "el": [
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Regular" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-soft storey" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Irregular-torsion" }, 
            { "sub": {
              "el": [
               { "type": "choice", "name": "Non ductile (PGA<0.1g)" }, 
               { "type": "choice", "name": "Moderate ductility (0.1g<PGA<0.3g)" }, 
               { "type": "choice", "name": "High ductility (PGA>0.3g)" }, 
               { "type": "choice", "name": "Unknown" }
              ],  "type": "group", "name": "Ductility" }, 
             "type": "choice", "name": "Unknown" }
           ],  "type": "group", "name": "Irregularities" }, 
          "type": "choice", "name": "Unknown" }
        ],  "type": "group", "name": "Height" }, 
       "type": "choice", "name": "Unknown" }
     ],  "type": "group", "name": "Lateral load resisting  system" }, 
    "type": "choice", "name": "Unknown" }
  ],  "type": "group", "name": "Type of concrete" }, 
 "type": "choice", "name": "Composite (concrete + steel)" };
