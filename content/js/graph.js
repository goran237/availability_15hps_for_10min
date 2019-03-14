/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 282.0, "minX": 0.0, "maxY": 5009.0, "series": [{"data": [[0.0, 282.0], [0.1, 287.0], [0.2, 287.0], [0.3, 287.0], [0.4, 288.0], [0.5, 288.0], [0.6, 288.0], [0.7, 288.0], [0.8, 288.0], [0.9, 288.0], [1.0, 288.0], [1.1, 288.0], [1.2, 288.0], [1.3, 288.0], [1.4, 288.0], [1.5, 288.0], [1.6, 289.0], [1.7, 289.0], [1.8, 289.0], [1.9, 289.0], [2.0, 289.0], [2.1, 289.0], [2.2, 289.0], [2.3, 289.0], [2.4, 289.0], [2.5, 289.0], [2.6, 289.0], [2.7, 289.0], [2.8, 289.0], [2.9, 289.0], [3.0, 289.0], [3.1, 289.0], [3.2, 289.0], [3.3, 289.0], [3.4, 289.0], [3.5, 289.0], [3.6, 289.0], [3.7, 289.0], [3.8, 289.0], [3.9, 289.0], [4.0, 289.0], [4.1, 289.0], [4.2, 289.0], [4.3, 289.0], [4.4, 289.0], [4.5, 289.0], [4.6, 289.0], [4.7, 290.0], [4.8, 290.0], [4.9, 290.0], [5.0, 290.0], [5.1, 290.0], [5.2, 290.0], [5.3, 290.0], [5.4, 290.0], [5.5, 290.0], [5.6, 290.0], [5.7, 290.0], [5.8, 290.0], [5.9, 290.0], [6.0, 290.0], [6.1, 290.0], [6.2, 290.0], [6.3, 290.0], [6.4, 290.0], [6.5, 290.0], [6.6, 290.0], [6.7, 290.0], [6.8, 290.0], [6.9, 290.0], [7.0, 290.0], [7.1, 290.0], [7.2, 290.0], [7.3, 290.0], [7.4, 290.0], [7.5, 290.0], [7.6, 290.0], [7.7, 290.0], [7.8, 290.0], [7.9, 290.0], [8.0, 290.0], [8.1, 290.0], [8.2, 290.0], [8.3, 290.0], [8.4, 290.0], [8.5, 290.0], [8.6, 290.0], [8.7, 290.0], [8.8, 290.0], [8.9, 290.0], [9.0, 290.0], [9.1, 290.0], [9.2, 290.0], [9.3, 290.0], [9.4, 290.0], [9.5, 290.0], [9.6, 290.0], [9.7, 290.0], [9.8, 290.0], [9.9, 290.0], [10.0, 290.0], [10.1, 290.0], [10.2, 290.0], [10.3, 290.0], [10.4, 290.0], [10.5, 290.0], [10.6, 291.0], [10.7, 291.0], [10.8, 291.0], [10.9, 291.0], [11.0, 291.0], [11.1, 291.0], [11.2, 291.0], [11.3, 291.0], [11.4, 291.0], [11.5, 291.0], [11.6, 291.0], [11.7, 291.0], [11.8, 291.0], [11.9, 291.0], [12.0, 291.0], [12.1, 291.0], [12.2, 291.0], [12.3, 291.0], [12.4, 291.0], [12.5, 291.0], [12.6, 291.0], [12.7, 291.0], [12.8, 291.0], [12.9, 291.0], [13.0, 291.0], [13.1, 291.0], [13.2, 291.0], [13.3, 291.0], [13.4, 291.0], [13.5, 291.0], [13.6, 291.0], [13.7, 291.0], [13.8, 291.0], [13.9, 291.0], [14.0, 291.0], [14.1, 291.0], [14.2, 291.0], [14.3, 291.0], [14.4, 291.0], [14.5, 291.0], [14.6, 291.0], [14.7, 291.0], [14.8, 291.0], [14.9, 291.0], [15.0, 291.0], [15.1, 291.0], [15.2, 291.0], [15.3, 291.0], [15.4, 291.0], [15.5, 291.0], [15.6, 291.0], [15.7, 291.0], [15.8, 291.0], [15.9, 291.0], [16.0, 291.0], [16.1, 291.0], [16.2, 291.0], [16.3, 291.0], [16.4, 291.0], [16.5, 291.0], [16.6, 291.0], [16.7, 291.0], [16.8, 291.0], [16.9, 291.0], [17.0, 291.0], [17.1, 291.0], [17.2, 291.0], [17.3, 291.0], [17.4, 291.0], [17.5, 291.0], [17.6, 291.0], [17.7, 291.0], [17.8, 291.0], [17.9, 291.0], [18.0, 291.0], [18.1, 291.0], [18.2, 291.0], [18.3, 291.0], [18.4, 291.0], [18.5, 291.0], [18.6, 291.0], [18.7, 291.0], [18.8, 291.0], [18.9, 291.0], [19.0, 291.0], [19.1, 291.0], [19.2, 291.0], [19.3, 292.0], [19.4, 292.0], [19.5, 292.0], [19.6, 292.0], [19.7, 292.0], [19.8, 292.0], [19.9, 292.0], [20.0, 292.0], [20.1, 292.0], [20.2, 292.0], [20.3, 292.0], [20.4, 292.0], [20.5, 292.0], [20.6, 292.0], [20.7, 292.0], [20.8, 292.0], [20.9, 292.0], [21.0, 292.0], [21.1, 292.0], [21.2, 292.0], [21.3, 292.0], [21.4, 292.0], [21.5, 292.0], [21.6, 292.0], [21.7, 292.0], [21.8, 292.0], [21.9, 292.0], [22.0, 292.0], [22.1, 292.0], [22.2, 292.0], [22.3, 292.0], [22.4, 292.0], [22.5, 292.0], [22.6, 292.0], [22.7, 292.0], [22.8, 292.0], [22.9, 292.0], [23.0, 292.0], [23.1, 292.0], [23.2, 292.0], [23.3, 292.0], [23.4, 292.0], [23.5, 292.0], [23.6, 292.0], [23.7, 292.0], [23.8, 292.0], [23.9, 292.0], [24.0, 292.0], [24.1, 292.0], [24.2, 292.0], [24.3, 292.0], [24.4, 292.0], [24.5, 292.0], [24.6, 292.0], [24.7, 292.0], [24.8, 292.0], [24.9, 292.0], [25.0, 292.0], [25.1, 292.0], [25.2, 292.0], [25.3, 292.0], [25.4, 292.0], [25.5, 292.0], [25.6, 292.0], [25.7, 292.0], [25.8, 292.0], [25.9, 292.0], [26.0, 292.0], [26.1, 292.0], [26.2, 292.0], [26.3, 292.0], [26.4, 292.0], [26.5, 292.0], [26.6, 292.0], [26.7, 292.0], [26.8, 292.0], [26.9, 292.0], [27.0, 292.0], [27.1, 292.0], [27.2, 292.0], [27.3, 292.0], [27.4, 292.0], [27.5, 292.0], [27.6, 292.0], [27.7, 292.0], [27.8, 292.0], [27.9, 292.0], [28.0, 292.0], [28.1, 292.0], [28.2, 292.0], [28.3, 292.0], [28.4, 292.0], [28.5, 292.0], [28.6, 292.0], [28.7, 292.0], [28.8, 292.0], [28.9, 292.0], [29.0, 292.0], [29.1, 292.0], [29.2, 292.0], [29.3, 292.0], [29.4, 292.0], [29.5, 292.0], [29.6, 292.0], [29.7, 292.0], [29.8, 293.0], [29.9, 293.0], [30.0, 293.0], [30.1, 293.0], [30.2, 293.0], [30.3, 293.0], [30.4, 293.0], [30.5, 293.0], [30.6, 293.0], [30.7, 293.0], [30.8, 293.0], [30.9, 293.0], [31.0, 293.0], [31.1, 293.0], [31.2, 293.0], [31.3, 293.0], [31.4, 293.0], [31.5, 293.0], [31.6, 293.0], [31.7, 293.0], [31.8, 293.0], [31.9, 293.0], [32.0, 293.0], [32.1, 293.0], [32.2, 293.0], [32.3, 293.0], [32.4, 293.0], [32.5, 293.0], [32.6, 293.0], [32.7, 293.0], [32.8, 293.0], [32.9, 293.0], [33.0, 293.0], [33.1, 293.0], [33.2, 293.0], [33.3, 293.0], [33.4, 293.0], [33.5, 293.0], [33.6, 293.0], [33.7, 293.0], [33.8, 293.0], [33.9, 293.0], [34.0, 293.0], [34.1, 293.0], [34.2, 293.0], [34.3, 293.0], [34.4, 293.0], [34.5, 293.0], [34.6, 293.0], [34.7, 293.0], [34.8, 293.0], [34.9, 293.0], [35.0, 293.0], [35.1, 293.0], [35.2, 293.0], [35.3, 293.0], [35.4, 293.0], [35.5, 293.0], [35.6, 293.0], [35.7, 293.0], [35.8, 293.0], [35.9, 293.0], [36.0, 293.0], [36.1, 293.0], [36.2, 293.0], [36.3, 293.0], [36.4, 293.0], [36.5, 293.0], [36.6, 293.0], [36.7, 293.0], [36.8, 293.0], [36.9, 293.0], [37.0, 293.0], [37.1, 293.0], [37.2, 293.0], [37.3, 293.0], [37.4, 293.0], [37.5, 293.0], [37.6, 293.0], [37.7, 293.0], [37.8, 293.0], [37.9, 293.0], [38.0, 293.0], [38.1, 293.0], [38.2, 293.0], [38.3, 293.0], [38.4, 293.0], [38.5, 293.0], [38.6, 293.0], [38.7, 293.0], [38.8, 293.0], [38.9, 293.0], [39.0, 293.0], [39.1, 293.0], [39.2, 293.0], [39.3, 293.0], [39.4, 293.0], [39.5, 293.0], [39.6, 293.0], [39.7, 293.0], [39.8, 293.0], [39.9, 293.0], [40.0, 293.0], [40.1, 293.0], [40.2, 293.0], [40.3, 294.0], [40.4, 294.0], [40.5, 294.0], [40.6, 294.0], [40.7, 294.0], [40.8, 294.0], [40.9, 294.0], [41.0, 294.0], [41.1, 294.0], [41.2, 294.0], [41.3, 294.0], [41.4, 294.0], [41.5, 294.0], [41.6, 294.0], [41.7, 294.0], [41.8, 294.0], [41.9, 294.0], [42.0, 294.0], [42.1, 294.0], [42.2, 294.0], [42.3, 294.0], [42.4, 294.0], [42.5, 294.0], [42.6, 294.0], [42.7, 294.0], [42.8, 294.0], [42.9, 294.0], [43.0, 294.0], [43.1, 294.0], [43.2, 294.0], [43.3, 294.0], [43.4, 294.0], [43.5, 294.0], [43.6, 294.0], [43.7, 294.0], [43.8, 294.0], [43.9, 294.0], [44.0, 294.0], [44.1, 294.0], [44.2, 294.0], [44.3, 294.0], [44.4, 294.0], [44.5, 294.0], [44.6, 294.0], [44.7, 294.0], [44.8, 294.0], [44.9, 294.0], [45.0, 294.0], [45.1, 294.0], [45.2, 294.0], [45.3, 294.0], [45.4, 294.0], [45.5, 294.0], [45.6, 294.0], [45.7, 294.0], [45.8, 294.0], [45.9, 294.0], [46.0, 294.0], [46.1, 294.0], [46.2, 294.0], [46.3, 294.0], [46.4, 294.0], [46.5, 294.0], [46.6, 294.0], [46.7, 294.0], [46.8, 294.0], [46.9, 294.0], [47.0, 294.0], [47.1, 294.0], [47.2, 294.0], [47.3, 294.0], [47.4, 294.0], [47.5, 294.0], [47.6, 294.0], [47.7, 294.0], [47.8, 294.0], [47.9, 294.0], [48.0, 294.0], [48.1, 294.0], [48.2, 294.0], [48.3, 294.0], [48.4, 294.0], [48.5, 294.0], [48.6, 294.0], [48.7, 294.0], [48.8, 294.0], [48.9, 294.0], [49.0, 294.0], [49.1, 294.0], [49.2, 294.0], [49.3, 294.0], [49.4, 294.0], [49.5, 294.0], [49.6, 294.0], [49.7, 294.0], [49.8, 294.0], [49.9, 294.0], [50.0, 294.0], [50.1, 294.0], [50.2, 294.0], [50.3, 294.0], [50.4, 294.0], [50.5, 294.0], [50.6, 295.0], [50.7, 295.0], [50.8, 295.0], [50.9, 295.0], [51.0, 295.0], [51.1, 295.0], [51.2, 295.0], [51.3, 295.0], [51.4, 295.0], [51.5, 295.0], [51.6, 295.0], [51.7, 295.0], [51.8, 295.0], [51.9, 295.0], [52.0, 295.0], [52.1, 295.0], [52.2, 295.0], [52.3, 295.0], [52.4, 295.0], [52.5, 295.0], [52.6, 295.0], [52.7, 295.0], [52.8, 295.0], [52.9, 295.0], [53.0, 295.0], [53.1, 295.0], [53.2, 295.0], [53.3, 295.0], [53.4, 295.0], [53.5, 295.0], [53.6, 295.0], [53.7, 295.0], [53.8, 295.0], [53.9, 295.0], [54.0, 295.0], [54.1, 295.0], [54.2, 295.0], [54.3, 295.0], [54.4, 295.0], [54.5, 295.0], [54.6, 295.0], [54.7, 295.0], [54.8, 295.0], [54.9, 295.0], [55.0, 295.0], [55.1, 295.0], [55.2, 295.0], [55.3, 295.0], [55.4, 295.0], [55.5, 295.0], [55.6, 295.0], [55.7, 295.0], [55.8, 295.0], [55.9, 295.0], [56.0, 295.0], [56.1, 295.0], [56.2, 295.0], [56.3, 295.0], [56.4, 295.0], [56.5, 295.0], [56.6, 295.0], [56.7, 295.0], [56.8, 295.0], [56.9, 295.0], [57.0, 295.0], [57.1, 295.0], [57.2, 295.0], [57.3, 295.0], [57.4, 295.0], [57.5, 295.0], [57.6, 295.0], [57.7, 295.0], [57.8, 295.0], [57.9, 295.0], [58.0, 295.0], [58.1, 295.0], [58.2, 295.0], [58.3, 295.0], [58.4, 295.0], [58.5, 295.0], [58.6, 295.0], [58.7, 295.0], [58.8, 295.0], [58.9, 295.0], [59.0, 295.0], [59.1, 295.0], [59.2, 295.0], [59.3, 295.0], [59.4, 295.0], [59.5, 295.0], [59.6, 295.0], [59.7, 295.0], [59.8, 296.0], [59.9, 296.0], [60.0, 296.0], [60.1, 296.0], [60.2, 296.0], [60.3, 296.0], [60.4, 296.0], [60.5, 296.0], [60.6, 296.0], [60.7, 296.0], [60.8, 296.0], [60.9, 296.0], [61.0, 296.0], [61.1, 296.0], [61.2, 296.0], [61.3, 296.0], [61.4, 296.0], [61.5, 296.0], [61.6, 296.0], [61.7, 296.0], [61.8, 296.0], [61.9, 296.0], [62.0, 296.0], [62.1, 296.0], [62.2, 296.0], [62.3, 296.0], [62.4, 296.0], [62.5, 296.0], [62.6, 296.0], [62.7, 296.0], [62.8, 296.0], [62.9, 296.0], [63.0, 296.0], [63.1, 296.0], [63.2, 296.0], [63.3, 296.0], [63.4, 296.0], [63.5, 296.0], [63.6, 296.0], [63.7, 296.0], [63.8, 296.0], [63.9, 296.0], [64.0, 296.0], [64.1, 296.0], [64.2, 296.0], [64.3, 296.0], [64.4, 296.0], [64.5, 296.0], [64.6, 296.0], [64.7, 296.0], [64.8, 296.0], [64.9, 296.0], [65.0, 296.0], [65.1, 296.0], [65.2, 296.0], [65.3, 296.0], [65.4, 296.0], [65.5, 296.0], [65.6, 296.0], [65.7, 296.0], [65.8, 296.0], [65.9, 296.0], [66.0, 296.0], [66.1, 296.0], [66.2, 296.0], [66.3, 296.0], [66.4, 296.0], [66.5, 296.0], [66.6, 296.0], [66.7, 296.0], [66.8, 296.0], [66.9, 296.0], [67.0, 296.0], [67.1, 296.0], [67.2, 296.0], [67.3, 296.0], [67.4, 296.0], [67.5, 296.0], [67.6, 296.0], [67.7, 297.0], [67.8, 297.0], [67.9, 297.0], [68.0, 297.0], [68.1, 297.0], [68.2, 297.0], [68.3, 297.0], [68.4, 297.0], [68.5, 297.0], [68.6, 297.0], [68.7, 297.0], [68.8, 297.0], [68.9, 297.0], [69.0, 297.0], [69.1, 297.0], [69.2, 297.0], [69.3, 297.0], [69.4, 297.0], [69.5, 297.0], [69.6, 297.0], [69.7, 297.0], [69.8, 297.0], [69.9, 297.0], [70.0, 297.0], [70.1, 297.0], [70.2, 297.0], [70.3, 297.0], [70.4, 297.0], [70.5, 297.0], [70.6, 297.0], [70.7, 297.0], [70.8, 297.0], [70.9, 297.0], [71.0, 297.0], [71.1, 297.0], [71.2, 297.0], [71.3, 297.0], [71.4, 297.0], [71.5, 297.0], [71.6, 297.0], [71.7, 297.0], [71.8, 297.0], [71.9, 297.0], [72.0, 297.0], [72.1, 297.0], [72.2, 297.0], [72.3, 297.0], [72.4, 297.0], [72.5, 297.0], [72.6, 297.0], [72.7, 297.0], [72.8, 297.0], [72.9, 297.0], [73.0, 297.0], [73.1, 297.0], [73.2, 297.0], [73.3, 297.0], [73.4, 297.0], [73.5, 297.0], [73.6, 297.0], [73.7, 297.0], [73.8, 297.0], [73.9, 297.0], [74.0, 297.0], [74.1, 298.0], [74.2, 298.0], [74.3, 298.0], [74.4, 298.0], [74.5, 298.0], [74.6, 298.0], [74.7, 298.0], [74.8, 298.0], [74.9, 298.0], [75.0, 298.0], [75.1, 298.0], [75.2, 298.0], [75.3, 298.0], [75.4, 298.0], [75.5, 298.0], [75.6, 298.0], [75.7, 298.0], [75.8, 298.0], [75.9, 298.0], [76.0, 298.0], [76.1, 298.0], [76.2, 298.0], [76.3, 298.0], [76.4, 298.0], [76.5, 298.0], [76.6, 298.0], [76.7, 298.0], [76.8, 298.0], [76.9, 298.0], [77.0, 298.0], [77.1, 298.0], [77.2, 298.0], [77.3, 298.0], [77.4, 298.0], [77.5, 298.0], [77.6, 298.0], [77.7, 298.0], [77.8, 298.0], [77.9, 298.0], [78.0, 298.0], [78.1, 298.0], [78.2, 298.0], [78.3, 298.0], [78.4, 298.0], [78.5, 298.0], [78.6, 298.0], [78.7, 298.0], [78.8, 298.0], [78.9, 298.0], [79.0, 298.0], [79.1, 299.0], [79.2, 299.0], [79.3, 299.0], [79.4, 299.0], [79.5, 299.0], [79.6, 299.0], [79.7, 299.0], [79.8, 299.0], [79.9, 299.0], [80.0, 299.0], [80.1, 299.0], [80.2, 299.0], [80.3, 299.0], [80.4, 299.0], [80.5, 299.0], [80.6, 299.0], [80.7, 299.0], [80.8, 299.0], [80.9, 299.0], [81.0, 299.0], [81.1, 299.0], [81.2, 299.0], [81.3, 299.0], [81.4, 299.0], [81.5, 299.0], [81.6, 299.0], [81.7, 299.0], [81.8, 299.0], [81.9, 299.0], [82.0, 299.0], [82.1, 299.0], [82.2, 299.0], [82.3, 299.0], [82.4, 299.0], [82.5, 299.0], [82.6, 300.0], [82.7, 300.0], [82.8, 300.0], [82.9, 300.0], [83.0, 300.0], [83.1, 300.0], [83.2, 300.0], [83.3, 300.0], [83.4, 300.0], [83.5, 300.0], [83.6, 300.0], [83.7, 300.0], [83.8, 300.0], [83.9, 300.0], [84.0, 300.0], [84.1, 300.0], [84.2, 300.0], [84.3, 300.0], [84.4, 300.0], [84.5, 300.0], [84.6, 300.0], [84.7, 300.0], [84.8, 300.0], [84.9, 300.0], [85.0, 300.0], [85.1, 300.0], [85.2, 300.0], [85.3, 300.0], [85.4, 301.0], [85.5, 301.0], [85.6, 301.0], [85.7, 301.0], [85.8, 301.0], [85.9, 301.0], [86.0, 301.0], [86.1, 301.0], [86.2, 301.0], [86.3, 301.0], [86.4, 301.0], [86.5, 301.0], [86.6, 301.0], [86.7, 301.0], [86.8, 301.0], [86.9, 301.0], [87.0, 301.0], [87.1, 302.0], [87.2, 302.0], [87.3, 302.0], [87.4, 302.0], [87.5, 302.0], [87.6, 302.0], [87.7, 302.0], [87.8, 302.0], [87.9, 302.0], [88.0, 302.0], [88.1, 302.0], [88.2, 302.0], [88.3, 302.0], [88.4, 303.0], [88.5, 303.0], [88.6, 303.0], [88.7, 303.0], [88.8, 303.0], [88.9, 303.0], [89.0, 303.0], [89.1, 303.0], [89.2, 303.0], [89.3, 303.0], [89.4, 303.0], [89.5, 303.0], [89.6, 304.0], [89.7, 304.0], [89.8, 304.0], [89.9, 304.0], [90.0, 304.0], [90.1, 304.0], [90.2, 304.0], [90.3, 304.0], [90.4, 304.0], [90.5, 305.0], [90.6, 305.0], [90.7, 305.0], [90.8, 305.0], [90.9, 305.0], [91.0, 305.0], [91.1, 305.0], [91.2, 306.0], [91.3, 306.0], [91.4, 306.0], [91.5, 306.0], [91.6, 306.0], [91.7, 306.0], [91.8, 307.0], [91.9, 307.0], [92.0, 307.0], [92.1, 307.0], [92.2, 308.0], [92.3, 308.0], [92.4, 308.0], [92.5, 308.0], [92.6, 308.0], [92.7, 309.0], [92.8, 309.0], [92.9, 310.0], [93.0, 310.0], [93.1, 310.0], [93.2, 310.0], [93.3, 311.0], [93.4, 311.0], [93.5, 311.0], [93.6, 312.0], [93.7, 312.0], [93.8, 313.0], [93.9, 313.0], [94.0, 313.0], [94.1, 314.0], [94.2, 314.0], [94.3, 315.0], [94.4, 315.0], [94.5, 316.0], [94.6, 316.0], [94.7, 316.0], [94.8, 317.0], [94.9, 317.0], [95.0, 318.0], [95.1, 318.0], [95.2, 319.0], [95.3, 319.0], [95.4, 319.0], [95.5, 320.0], [95.6, 320.0], [95.7, 321.0], [95.8, 321.0], [95.9, 321.0], [96.0, 322.0], [96.1, 323.0], [96.2, 323.0], [96.3, 324.0], [96.4, 325.0], [96.5, 325.0], [96.6, 326.0], [96.7, 327.0], [96.8, 328.0], [96.9, 329.0], [97.0, 330.0], [97.1, 331.0], [97.2, 332.0], [97.3, 333.0], [97.4, 334.0], [97.5, 335.0], [97.6, 336.0], [97.7, 338.0], [97.8, 340.0], [97.9, 342.0], [98.0, 345.0], [98.1, 347.0], [98.2, 350.0], [98.3, 354.0], [98.4, 358.0], [98.5, 361.0], [98.6, 366.0], [98.7, 371.0], [98.8, 379.0], [98.9, 392.0], [99.0, 406.0], [99.1, 420.0], [99.2, 428.0], [99.3, 497.0], [99.4, 504.0], [99.5, 507.0], [99.6, 530.0], [99.7, 553.0], [99.8, 748.0], [99.9, 1303.0]], "isOverall": false, "label": "Get availability", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 7418.0, "series": [{"data": [[600.0, 4.0], [700.0, 3.0], [200.0, 7418.0], [3300.0, 2.0], [800.0, 2.0], [900.0, 1.0], [300.0, 1475.0], [1200.0, 3.0], [5000.0, 1.0], [1300.0, 2.0], [1400.0, 2.0], [400.0, 32.0], [1600.0, 2.0], [500.0, 40.0]], "isOverall": false, "label": "Get availability", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 8921.0, "series": [{"data": [[0.0, 8921.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 56.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 7.249999999999999, "minX": 1.55255369E12, "maxY": 9.382550335570473, "series": [{"data": [[1.55255377E12, 8.939597315436245], [1.55255394E12, 8.626666666666662], [1.55255411E12, 8.688741721854303], [1.55255428E12, 8.655629139072845], [1.55255385E12, 8.677852348993286], [1.55255402E12, 8.682119205298008], [1.55255419E12, 8.68666666666667], [1.55255376E12, 8.754966887417213], [1.55255393E12, 8.751677852348989], [1.5525541E12, 8.664429530201334], [1.55255427E12, 8.651006711409394], [1.55255384E12, 8.659999999999993], [1.55255401E12, 8.677852348993284], [1.55255418E12, 8.839999999999993], [1.55255375E12, 8.738255033557042], [1.55255392E12, 8.633333333333331], [1.55255409E12, 8.75167785234899], [1.55255426E12, 8.68456375838926], [1.55255383E12, 8.827814569536425], [1.552554E12, 8.785234899328852], [1.55255417E12, 8.754966887417215], [1.55255374E12, 8.76158940397351], [1.55255391E12, 8.686666666666662], [1.55255408E12, 8.713333333333336], [1.55255425E12, 8.56375838926174], [1.55255382E12, 8.68456375838926], [1.55255399E12, 8.806666666666661], [1.55255416E12, 8.704697986577182], [1.55255373E12, 8.71333333333333], [1.5525539E12, 8.7], [1.55255407E12, 8.740000000000004], [1.55255424E12, 8.655629139072849], [1.55255381E12, 8.834437086092713], [1.55255398E12, 8.613333333333328], [1.55255415E12, 8.719999999999997], [1.55255372E12, 8.838926174496642], [1.55255389E12, 8.671140939597313], [1.55255406E12, 8.715231788079468], [1.55255423E12, 9.266666666666671], [1.5525538E12, 8.797297297297296], [1.55255397E12, 8.664429530201339], [1.55255414E12, 8.655405405405403], [1.55255371E12, 8.711409395973154], [1.55255388E12, 8.70860927152318], [1.55255405E12, 8.65100671140939], [1.55255422E12, 8.853333333333337], [1.55255379E12, 8.70394736842105], [1.55255396E12, 8.613333333333333], [1.55255413E12, 8.973333333333327], [1.5525537E12, 9.382550335570473], [1.55255387E12, 8.619999999999992], [1.55255404E12, 8.671140939597311], [1.55255421E12, 8.805369127516782], [1.55255378E12, 8.736486486486486], [1.55255395E12, 8.65333333333333], [1.55255412E12, 8.906666666666673], [1.55255429E12, 7.249999999999999], [1.55255369E12, 8.666666666666664], [1.55255386E12, 8.604026845637582], [1.55255403E12, 8.699999999999998], [1.5525542E12, 8.651006711409398]], "isOverall": false, "label": "GET availability", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.55255429E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 292.0, "minX": 1.0, "maxY": 596.25, "series": [{"data": [[8.0, 297.0973770491804], [2.0, 292.0], [9.0, 300.56134325510345], [10.0, 314.9056939501778], [11.0, 339.7796610169491], [12.0, 519.0], [3.0, 304.0], [13.0, 344.0], [14.0, 596.25], [15.0, 524.0], [16.0, 566.0], [4.0, 302.0], [1.0, 294.0], [6.0, 297.0], [7.0, 295.8297872340424]], "isOverall": false, "label": "Get availability", "isController": false}, {"data": [[8.733726493824426, 301.0380549682878]], "isOverall": false, "label": "Get availability-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 626.4, "minX": 1.55255369E12, "maxY": 6505.6, "series": [{"data": [[1.55255377E12, 6377.2], [1.55255394E12, 6420.0], [1.55255411E12, 6462.8], [1.55255428E12, 6462.8], [1.55255385E12, 6377.4], [1.55255402E12, 6462.8], [1.55255419E12, 6420.0], [1.55255376E12, 6462.8], [1.55255393E12, 6377.2], [1.5525541E12, 6377.2], [1.55255427E12, 6377.2], [1.55255384E12, 6420.0], [1.55255401E12, 6377.2], [1.55255418E12, 6420.0], [1.55255375E12, 6377.2], [1.55255392E12, 6420.0], [1.55255409E12, 6377.2], [1.55255426E12, 6377.2], [1.55255383E12, 6463.0], [1.552554E12, 6377.2], [1.55255417E12, 6462.8], [1.55255374E12, 6462.8], [1.55255391E12, 6420.0], [1.55255408E12, 6420.0], [1.55255425E12, 6377.2], [1.55255382E12, 6377.2], [1.55255399E12, 6420.0], [1.55255416E12, 6377.2], [1.55255373E12, 6420.0], [1.5525539E12, 6420.0], [1.55255407E12, 6420.0], [1.55255424E12, 6462.8], [1.55255381E12, 6462.8], [1.55255398E12, 6420.0], [1.55255415E12, 6420.0], [1.55255372E12, 6377.2], [1.55255389E12, 6377.2], [1.55255406E12, 6462.8], [1.55255423E12, 6420.0], [1.5525538E12, 6334.4], [1.55255397E12, 6377.2], [1.55255414E12, 6334.4], [1.55255371E12, 6377.2], [1.55255388E12, 6462.8], [1.55255405E12, 6377.3], [1.55255422E12, 6420.0], [1.55255379E12, 6505.6], [1.55255396E12, 6420.0], [1.55255413E12, 6420.0], [1.5525537E12, 6377.2], [1.55255387E12, 6420.0], [1.55255404E12, 6377.2], [1.55255421E12, 6377.2], [1.55255378E12, 6334.4], [1.55255395E12, 6420.0], [1.55255412E12, 6420.0], [1.55255429E12, 1027.2], [1.55255369E12, 5521.2], [1.55255386E12, 6377.2], [1.55255403E12, 6420.0], [1.5525542E12, 6377.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55255377E12, 3888.9], [1.55255394E12, 3915.0], [1.55255411E12, 3941.1], [1.55255428E12, 3941.1], [1.55255385E12, 3888.9], [1.55255402E12, 3941.1], [1.55255419E12, 3915.0], [1.55255376E12, 3941.1], [1.55255393E12, 3888.9], [1.5525541E12, 3888.9], [1.55255427E12, 3888.9], [1.55255384E12, 3915.0], [1.55255401E12, 3888.9], [1.55255418E12, 3915.0], [1.55255375E12, 3888.9], [1.55255392E12, 3915.0], [1.55255409E12, 3888.9], [1.55255426E12, 3888.9], [1.55255383E12, 3941.1], [1.552554E12, 3888.9], [1.55255417E12, 3941.1], [1.55255374E12, 3941.1], [1.55255391E12, 3915.0], [1.55255408E12, 3915.0], [1.55255425E12, 3888.9], [1.55255382E12, 3888.9], [1.55255399E12, 3915.0], [1.55255416E12, 3888.9], [1.55255373E12, 3915.0], [1.5525539E12, 3915.0], [1.55255407E12, 3915.0], [1.55255424E12, 3941.1], [1.55255381E12, 3941.1], [1.55255398E12, 3915.0], [1.55255415E12, 3915.0], [1.55255372E12, 3888.9], [1.55255389E12, 3888.9], [1.55255406E12, 3941.1], [1.55255423E12, 3915.0], [1.5525538E12, 3862.8], [1.55255397E12, 3888.9], [1.55255414E12, 3862.8], [1.55255371E12, 3888.9], [1.55255388E12, 3941.1], [1.55255405E12, 3888.9], [1.55255422E12, 3915.0], [1.55255379E12, 3967.2], [1.55255396E12, 3915.0], [1.55255413E12, 3915.0], [1.5525537E12, 3888.9], [1.55255387E12, 3915.0], [1.55255404E12, 3888.9], [1.55255421E12, 3888.9], [1.55255378E12, 3862.8], [1.55255395E12, 3915.0], [1.55255412E12, 3915.0], [1.55255429E12, 626.4], [1.55255369E12, 3366.9], [1.55255386E12, 3888.9], [1.55255403E12, 3915.0], [1.5525542E12, 3888.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.55255429E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 293.4466666666669, "minX": 1.55255369E12, "maxY": 340.0399999999999, "series": [{"data": [[1.55255377E12, 316.6241610738254], [1.55255394E12, 297.38000000000005], [1.55255411E12, 299.3708609271525], [1.55255428E12, 294.9999999999999], [1.55255385E12, 299.0738255033557], [1.55255402E12, 298.09933774834445], [1.55255419E12, 296.2800000000001], [1.55255376E12, 304.066225165563], [1.55255393E12, 295.61073825503365], [1.5525541E12, 301.4429530201338], [1.55255427E12, 295.89261744966444], [1.55255384E12, 295.04666666666657], [1.55255401E12, 298.0536912751678], [1.55255418E12, 307.90666666666647], [1.55255375E12, 299.89261744966433], [1.55255392E12, 293.4466666666669], [1.55255409E12, 302.3959731543625], [1.55255426E12, 296.026845637584], [1.55255383E12, 305.384105960265], [1.552554E12, 302.00671140939596], [1.55255417E12, 299.4701986754966], [1.55255374E12, 301.04635761589407], [1.55255391E12, 296.07333333333366], [1.55255408E12, 297.0466666666667], [1.55255425E12, 294.56375838926175], [1.55255382E12, 298.6308724832214], [1.55255399E12, 300.09333333333336], [1.55255416E12, 297.29530201342294], [1.55255373E12, 299.2666666666667], [1.5525539E12, 296.9866666666667], [1.55255407E12, 304.3133333333334], [1.55255424E12, 299.2582781456955], [1.55255381E12, 311.5695364238412], [1.55255398E12, 295.55333333333346], [1.55255415E12, 299.26666666666654], [1.55255372E12, 306.8389261744965], [1.55255389E12, 294.2416107382549], [1.55255406E12, 299.5298013245034], [1.55255423E12, 340.0399999999999], [1.5525538E12, 303.66216216216213], [1.55255397E12, 297.81879194630886], [1.55255414E12, 296.7297297297298], [1.55255371E12, 299.17449664429535], [1.55255388E12, 298.72847682119203], [1.55255405E12, 297.201342281879], [1.55255422E12, 300.99333333333345], [1.55255379E12, 295.74999999999994], [1.55255396E12, 295.54666666666674], [1.55255413E12, 318.7200000000001], [1.5525537E12, 337.7046979865771], [1.55255387E12, 295.55999999999995], [1.55255404E12, 297.7651006711407], [1.55255421E12, 302.3691275167785], [1.55255378E12, 300.2432432432432], [1.55255395E12, 296.10666666666657], [1.55255412E12, 313.4799999999999], [1.55255429E12, 293.45833333333326], [1.55255369E12, 296.1705426356592], [1.55255386E12, 295.7114093959733], [1.55255403E12, 295.30000000000024], [1.5525542E12, 298.03355704698]], "isOverall": false, "label": "Get availability", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.55255429E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 293.43333333333345, "minX": 1.55255369E12, "maxY": 340.0333333333332, "series": [{"data": [[1.55255377E12, 316.61073825503365], [1.55255394E12, 297.3733333333335], [1.55255411E12, 299.35761589403984], [1.55255428E12, 294.9999999999999], [1.55255385E12, 299.06040268456377], [1.55255402E12, 298.0794701986756], [1.55255419E12, 296.2733333333333], [1.55255376E12, 304.05960264900654], [1.55255393E12, 295.5906040268457], [1.5525541E12, 301.42953020134223], [1.55255427E12, 295.89261744966444], [1.55255384E12, 295.0399999999999], [1.55255401E12, 298.0469798657719], [1.55255418E12, 307.87333333333345], [1.55255375E12, 299.8791946308724], [1.55255392E12, 293.43333333333345], [1.55255409E12, 302.3959731543625], [1.55255426E12, 296.0067114093959], [1.55255383E12, 305.35761589403984], [1.552554E12, 302.00000000000006], [1.55255417E12, 299.45033112582786], [1.55255374E12, 301.0331125827814], [1.55255391E12, 296.07333333333366], [1.55255408E12, 297.0466666666667], [1.55255425E12, 294.5503355704698], [1.55255382E12, 298.60402684563763], [1.55255399E12, 300.09333333333336], [1.55255416E12, 297.288590604027], [1.55255373E12, 299.26000000000005], [1.5525539E12, 296.9733333333336], [1.55255407E12, 304.3066666666668], [1.55255424E12, 299.2582781456955], [1.55255381E12, 311.549668874172], [1.55255398E12, 295.5466666666666], [1.55255415E12, 299.26666666666654], [1.55255372E12, 306.7986577181207], [1.55255389E12, 294.234899328859], [1.55255406E12, 299.516556291391], [1.55255423E12, 340.0333333333332], [1.5525538E12, 303.62837837837804], [1.55255397E12, 297.7986577181209], [1.55255414E12, 296.72297297297314], [1.55255371E12, 299.15436241610735], [1.55255388E12, 298.7152317880794], [1.55255405E12, 297.18791946308704], [1.55255422E12, 300.9866666666667], [1.55255379E12, 295.7368421052631], [1.55255396E12, 295.54000000000013], [1.55255413E12, 318.7000000000001], [1.5525537E12, 337.6778523489933], [1.55255387E12, 295.5466666666667], [1.55255404E12, 297.74496644295306], [1.55255421E12, 302.36241610738244], [1.55255378E12, 300.2297297297299], [1.55255395E12, 296.0999999999999], [1.55255412E12, 313.4733333333332], [1.55255429E12, 293.45833333333326], [1.55255369E12, 296.1627906976747], [1.55255386E12, 295.7114093959733], [1.55255403E12, 295.2866666666668], [1.5525542E12, 298.03355704698]], "isOverall": false, "label": "Get availability", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.55255429E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 131.54166666666663, "minX": 1.55255369E12, "maxY": 158.83333333333326, "series": [{"data": [[1.55255377E12, 152.97315436241612], [1.55255394E12, 132.74666666666658], [1.55255411E12, 132.6953642384106], [1.55255428E12, 131.72185430463568], [1.55255385E12, 132.3422818791946], [1.55255402E12, 134.45695364238412], [1.55255419E12, 132.07999999999998], [1.55255376E12, 134.25827814569527], [1.55255393E12, 131.993288590604], [1.5525541E12, 131.99328859060404], [1.55255427E12, 131.99999999999997], [1.55255384E12, 132.69333333333324], [1.55255401E12, 132.73154362416102], [1.55255418E12, 141.60666666666668], [1.55255375E12, 132.77181208053693], [1.55255392E12, 131.84], [1.55255409E12, 132.3892617449665], [1.55255426E12, 133.29530201342283], [1.55255383E12, 133.6556291390729], [1.552554E12, 133.4362416107383], [1.55255417E12, 133.07284768211926], [1.55255374E12, 133.48344370860931], [1.55255391E12, 132.05333333333348], [1.55255408E12, 133.43999999999994], [1.55255425E12, 131.73154362416108], [1.55255382E12, 133.3221476510067], [1.55255399E12, 135.47333333333324], [1.55255416E12, 132.95973154362414], [1.55255373E12, 133.46666666666673], [1.5525539E12, 132.6599999999999], [1.55255407E12, 135.78666666666672], [1.55255424E12, 132.1125827814569], [1.55255381E12, 141.29801324503313], [1.55255398E12, 132.15999999999994], [1.55255415E12, 132.61333333333332], [1.55255372E12, 133.99999999999997], [1.55255389E12, 131.61073825503357], [1.55255406E12, 132.25827814569536], [1.55255423E12, 158.83333333333326], [1.5525538E12, 136.91891891891905], [1.55255397E12, 131.77181208053696], [1.55255414E12, 132.17567567567573], [1.55255371E12, 134.24161073825516], [1.55255388E12, 131.96026490066214], [1.55255405E12, 133.06711409395973], [1.55255422E12, 132.4533333333333], [1.55255379E12, 132.53947368421066], [1.55255396E12, 132.19999999999993], [1.55255413E12, 153.4733333333333], [1.5525537E12, 140.13422818791938], [1.55255387E12, 131.7866666666667], [1.55255404E12, 132.67114093959725], [1.55255421E12, 132.55033557046983], [1.55255378E12, 133.97972972972977], [1.55255395E12, 132.55333333333343], [1.55255412E12, 133.39999999999992], [1.55255429E12, 131.54166666666663], [1.55255369E12, 131.76744186046503], [1.55255386E12, 132.23489932885906], [1.55255403E12, 132.66000000000003], [1.5525542E12, 132.744966442953]], "isOverall": false, "label": "Get availability", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.55255429E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 285.0, "minX": 1.55255369E12, "maxY": 5009.0, "series": [{"data": [[1.55255377E12, 3330.0], [1.55255394E12, 400.0], [1.55255411E12, 543.0], [1.55255428E12, 320.0], [1.55255385E12, 506.0], [1.55255402E12, 368.0], [1.55255419E12, 513.0], [1.55255376E12, 505.0], [1.55255393E12, 342.0], [1.5525541E12, 1292.0], [1.55255427E12, 323.0], [1.55255384E12, 331.0], [1.55255401E12, 333.0], [1.55255418E12, 1655.0], [1.55255375E12, 505.0], [1.55255392E12, 323.0], [1.55255409E12, 1288.0], [1.55255426E12, 392.0], [1.55255383E12, 909.0], [1.552554E12, 472.0], [1.55255417E12, 502.0], [1.55255374E12, 541.0], [1.55255391E12, 320.0], [1.55255408E12, 424.0], [1.55255425E12, 319.0], [1.55255382E12, 350.0], [1.55255399E12, 409.0], [1.55255416E12, 506.0], [1.55255373E12, 423.0], [1.5525539E12, 386.0], [1.55255407E12, 513.0], [1.55255424E12, 496.0], [1.55255381E12, 1410.0], [1.55255398E12, 360.0], [1.55255415E12, 677.0], [1.55255372E12, 1294.0], [1.55255389E12, 319.0], [1.55255406E12, 669.0], [1.55255423E12, 1698.0], [1.5525538E12, 395.0], [1.55255397E12, 540.0], [1.55255414E12, 505.0], [1.55255371E12, 427.0], [1.55255388E12, 512.0], [1.55255405E12, 505.0], [1.55255422E12, 559.0], [1.55255379E12, 331.0], [1.55255396E12, 325.0], [1.55255413E12, 3302.0], [1.5525537E12, 5009.0], [1.55255387E12, 501.0], [1.55255404E12, 547.0], [1.55255421E12, 554.0], [1.55255378E12, 504.0], [1.55255395E12, 355.0], [1.55255412E12, 751.0], [1.55255429E12, 304.0], [1.55255369E12, 328.0], [1.55255386E12, 356.0], [1.55255403E12, 423.0], [1.5525542E12, 507.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55255377E12, 287.0], [1.55255394E12, 288.0], [1.55255411E12, 289.0], [1.55255428E12, 288.0], [1.55255385E12, 287.0], [1.55255402E12, 286.0], [1.55255419E12, 289.0], [1.55255376E12, 287.0], [1.55255393E12, 288.0], [1.5525541E12, 287.0], [1.55255427E12, 287.0], [1.55255384E12, 288.0], [1.55255401E12, 288.0], [1.55255418E12, 287.0], [1.55255375E12, 289.0], [1.55255392E12, 287.0], [1.55255409E12, 288.0], [1.55255426E12, 288.0], [1.55255383E12, 288.0], [1.552554E12, 288.0], [1.55255417E12, 288.0], [1.55255374E12, 289.0], [1.55255391E12, 288.0], [1.55255408E12, 289.0], [1.55255425E12, 288.0], [1.55255382E12, 288.0], [1.55255399E12, 289.0], [1.55255416E12, 287.0], [1.55255373E12, 290.0], [1.5525539E12, 287.0], [1.55255407E12, 289.0], [1.55255424E12, 291.0], [1.55255381E12, 289.0], [1.55255398E12, 289.0], [1.55255415E12, 285.0], [1.55255372E12, 288.0], [1.55255389E12, 287.0], [1.55255406E12, 287.0], [1.55255423E12, 288.0], [1.5525538E12, 289.0], [1.55255397E12, 289.0], [1.55255414E12, 288.0], [1.55255371E12, 288.0], [1.55255388E12, 288.0], [1.55255405E12, 287.0], [1.55255422E12, 288.0], [1.55255379E12, 288.0], [1.55255396E12, 288.0], [1.55255413E12, 288.0], [1.5525537E12, 289.0], [1.55255387E12, 288.0], [1.55255404E12, 287.0], [1.55255421E12, 288.0], [1.55255378E12, 289.0], [1.55255395E12, 287.0], [1.55255412E12, 289.0], [1.55255429E12, 288.0], [1.55255369E12, 289.0], [1.55255386E12, 285.0], [1.55255403E12, 287.0], [1.5525542E12, 288.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55255377E12, 308.0], [1.55255394E12, 305.0], [1.55255411E12, 304.0], [1.55255428E12, 304.0], [1.55255385E12, 307.9000000000001], [1.55255402E12, 304.0], [1.55255419E12, 304.0], [1.55255376E12, 309.0], [1.55255393E12, 305.0], [1.5525541E12, 304.0], [1.55255427E12, 304.0], [1.55255384E12, 308.0], [1.55255401E12, 304.0], [1.55255418E12, 304.0], [1.55255375E12, 308.0], [1.55255392E12, 305.0], [1.55255409E12, 304.0], [1.55255426E12, 304.0], [1.55255383E12, 308.0], [1.552554E12, 304.0], [1.55255417E12, 304.0], [1.55255374E12, 308.0], [1.55255391E12, 305.0], [1.55255408E12, 304.0], [1.55255425E12, 304.0], [1.55255382E12, 308.0], [1.55255399E12, 304.0], [1.55255416E12, 304.0], [1.55255373E12, 308.0], [1.5525539E12, 305.0], [1.55255407E12, 305.0], [1.55255424E12, 304.0], [1.55255381E12, 308.0], [1.55255398E12, 304.0], [1.55255415E12, 304.0], [1.55255372E12, 308.0], [1.55255389E12, 306.0], [1.55255406E12, 304.0], [1.55255423E12, 304.0], [1.5525538E12, 308.0], [1.55255397E12, 304.0], [1.55255414E12, 304.0], [1.55255371E12, 308.0], [1.55255388E12, 306.0], [1.55255405E12, 304.0], [1.55255422E12, 304.0], [1.55255379E12, 306.0], [1.55255396E12, 304.0], [1.55255413E12, 304.0], [1.5525537E12, 308.1], [1.55255387E12, 306.0], [1.55255404E12, 304.0], [1.55255421E12, 304.0], [1.55255378E12, 308.0], [1.55255395E12, 304.0], [1.55255412E12, 304.0], [1.55255429E12, 304.0], [1.55255369E12, 301.0], [1.55255386E12, 307.0], [1.55255403E12, 304.0], [1.5525542E12, 304.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55255377E12, 425.19000000000005], [1.55255394E12, 396.6199999999999], [1.55255411E12, 377.8599999999997], [1.55255428E12, 401.40999999999985], [1.55255385E12, 426.78999999999996], [1.55255402E12, 379.3199999999997], [1.55255419E12, 397.7600000000002], [1.55255376E12, 426.22], [1.55255393E12, 397.6199999999999], [1.5525541E12, 378.0], [1.55255427E12, 405.6800000000003], [1.55255384E12, 426.25999999999976], [1.55255401E12, 382.84000000000015], [1.55255418E12, 398.7600000000002], [1.55255375E12, 425.19000000000005], [1.55255392E12, 404.300000000002], [1.55255409E12, 378.0], [1.55255426E12, 409.0], [1.55255383E12, 427.75999999999976], [1.552554E12, 388.96999999999935], [1.55255417E12, 395.8800000000001], [1.55255374E12, 426.22], [1.55255391E12, 413.60000000000036], [1.55255408E12, 378.35000000000036], [1.55255425E12, 411.6999999999989], [1.55255382E12, 426.25], [1.55255399E12, 381.27999999999884], [1.55255416E12, 390.1200000000026], [1.55255373E12, 425.19000000000005], [1.5525539E12, 416.3000000000002], [1.55255407E12, 378.85000000000036], [1.55255424E12, 414.77999999999884], [1.55255381E12, 427.74], [1.55255398E12, 379.27999999999884], [1.55255415E12, 394.0400000000009], [1.55255372E12, 436.66000000000076], [1.55255389E12, 421.8000000000011], [1.55255406E12, 379.40000000000146], [1.55255423E12, 415.7999999999993], [1.5525538E12, 418.5], [1.55255397E12, 385.27999999999884], [1.55255414E12, 390.0400000000009], [1.55255371E12, 422.0799999999996], [1.55255388E12, 423.8699999999999], [1.55255405E12, 377.8599999999997], [1.55255422E12, 401.0], [1.55255379E12, 423.0], [1.55255396E12, 383.2400000000016], [1.55255413E12, 393.8799999999974], [1.5525537E12, 554.169999999978], [1.55255387E12, 423.0], [1.55255404E12, 379.3600000000006], [1.55255421E12, 399.7999999999993], [1.55255378E12, 426.25], [1.55255395E12, 393.2899999999995], [1.55255412E12, 389.8799999999974], [1.55255429E12, 401.1700000000001], [1.55255369E12, 325.5999999999999], [1.55255386E12, 423.90000000000055], [1.55255403E12, 381.3199999999997], [1.5525542E12, 396.78000000000065]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55255377E12, 321.0], [1.55255394E12, 318.0], [1.55255411E12, 318.0], [1.55255428E12, 318.0], [1.55255385E12, 322.0], [1.55255402E12, 318.0], [1.55255419E12, 318.0], [1.55255376E12, 322.0999999999999], [1.55255393E12, 318.0499999999997], [1.5525541E12, 318.0], [1.55255427E12, 318.0], [1.55255384E12, 323.0], [1.55255401E12, 317.0], [1.55255418E12, 318.0], [1.55255375E12, 320.0], [1.55255392E12, 319.0], [1.55255409E12, 319.0], [1.55255426E12, 318.0499999999993], [1.55255383E12, 324.0], [1.552554E12, 317.0], [1.55255417E12, 318.39999999999964], [1.55255374E12, 320.0999999999999], [1.55255391E12, 319.0], [1.55255408E12, 319.0], [1.55255425E12, 319.0], [1.55255382E12, 323.25], [1.55255399E12, 317.0], [1.55255416E12, 318.9499999999998], [1.55255373E12, 319.0], [1.5525539E12, 320.0], [1.55255407E12, 319.0], [1.55255424E12, 319.0], [1.55255381E12, 324.0], [1.55255398E12, 316.0], [1.55255415E12, 318.39999999999964], [1.55255372E12, 317.15], [1.55255389E12, 320.0], [1.55255406E12, 317.0], [1.55255423E12, 319.0], [1.5525538E12, 324.0], [1.55255397E12, 316.0], [1.55255414E12, 319.0], [1.55255371E12, 316.59999999999997], [1.55255388E12, 321.0], [1.55255405E12, 317.3000000000002], [1.55255422E12, 318.0], [1.55255379E12, 320.0], [1.55255396E12, 317.0], [1.55255413E12, 319.0], [1.5525537E12, 314.0], [1.55255387E12, 321.0], [1.55255404E12, 317.0], [1.55255421E12, 318.0], [1.55255378E12, 322.0], [1.55255395E12, 318.0], [1.55255412E12, 319.0], [1.55255429E12, 318.0], [1.55255369E12, 308.5], [1.55255386E12, 322.0], [1.55255403E12, 317.0], [1.5525542E12, 318.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.55255429E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 294.0, "minX": 1000.0, "maxY": 303.0, "series": [{"data": [[1000.0, 294.0], [2000.0, 299.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1000.0, 303.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 294.0, "minX": 1000.0, "maxY": 303.0, "series": [{"data": [[1000.0, 294.0], [2000.0, 299.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1000.0, 303.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.55255369E12, "maxY": 15.1, "series": [{"data": [[1.55255377E12, 14.9], [1.55255394E12, 14.9], [1.55255411E12, 15.0], [1.55255428E12, 15.0], [1.55255385E12, 15.0], [1.55255402E12, 14.9], [1.55255419E12, 14.9], [1.55255376E12, 15.1], [1.55255393E12, 15.0], [1.5525541E12, 15.0], [1.55255427E12, 15.0], [1.55255384E12, 15.1], [1.55255401E12, 15.0], [1.55255418E12, 15.1], [1.55255375E12, 14.9], [1.55255392E12, 15.0], [1.55255409E12, 15.0], [1.55255426E12, 14.9], [1.55255383E12, 14.8], [1.552554E12, 15.0], [1.55255417E12, 15.0], [1.55255374E12, 14.9], [1.55255391E12, 14.9], [1.55255408E12, 15.0], [1.55255425E12, 15.1], [1.55255382E12, 15.1], [1.55255399E12, 15.0], [1.55255416E12, 14.9], [1.55255373E12, 15.0], [1.5525539E12, 15.0], [1.55255407E12, 14.9], [1.55255424E12, 14.7], [1.55255381E12, 14.9], [1.55255398E12, 15.0], [1.55255415E12, 14.9], [1.55255372E12, 15.0], [1.55255389E12, 15.0], [1.55255406E12, 15.0], [1.55255423E12, 15.1], [1.5525538E12, 15.0], [1.55255397E12, 14.9], [1.55255414E12, 15.0], [1.55255371E12, 15.1], [1.55255388E12, 14.9], [1.55255405E12, 14.9], [1.55255422E12, 15.0], [1.55255379E12, 15.0], [1.55255396E12, 14.9], [1.55255413E12, 15.0], [1.5525537E12, 14.8], [1.55255387E12, 15.1], [1.55255404E12, 15.0], [1.55255421E12, 15.1], [1.55255378E12, 15.0], [1.55255395E12, 15.1], [1.55255412E12, 15.0], [1.55255429E12, 2.0], [1.55255369E12, 13.3], [1.55255386E12, 14.9], [1.55255403E12, 15.0], [1.5525542E12, 14.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.55255429E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.4, "minX": 1.55255369E12, "maxY": 15.2, "series": [{"data": [[1.55255377E12, 14.9], [1.55255394E12, 15.0], [1.55255411E12, 15.1], [1.55255428E12, 15.1], [1.55255385E12, 14.9], [1.55255402E12, 15.1], [1.55255419E12, 15.0], [1.55255376E12, 15.1], [1.55255393E12, 14.9], [1.5525541E12, 14.9], [1.55255427E12, 14.9], [1.55255384E12, 15.0], [1.55255401E12, 14.9], [1.55255418E12, 15.0], [1.55255375E12, 14.9], [1.55255392E12, 15.0], [1.55255409E12, 14.9], [1.55255426E12, 14.9], [1.55255383E12, 15.1], [1.552554E12, 14.9], [1.55255417E12, 15.1], [1.55255374E12, 15.1], [1.55255391E12, 15.0], [1.55255408E12, 15.0], [1.55255425E12, 14.9], [1.55255382E12, 14.9], [1.55255399E12, 15.0], [1.55255416E12, 14.9], [1.55255373E12, 15.0], [1.5525539E12, 15.0], [1.55255407E12, 15.0], [1.55255424E12, 15.1], [1.55255381E12, 15.1], [1.55255398E12, 15.0], [1.55255415E12, 15.0], [1.55255372E12, 14.9], [1.55255389E12, 14.9], [1.55255406E12, 15.1], [1.55255423E12, 15.0], [1.5525538E12, 14.8], [1.55255397E12, 14.9], [1.55255414E12, 14.8], [1.55255371E12, 14.9], [1.55255388E12, 15.1], [1.55255405E12, 14.9], [1.55255422E12, 15.0], [1.55255379E12, 15.2], [1.55255396E12, 15.0], [1.55255413E12, 15.0], [1.5525537E12, 14.9], [1.55255387E12, 15.0], [1.55255404E12, 14.9], [1.55255421E12, 14.9], [1.55255378E12, 14.8], [1.55255395E12, 15.0], [1.55255412E12, 15.0], [1.55255429E12, 2.4], [1.55255369E12, 12.9], [1.55255386E12, 14.9], [1.55255403E12, 15.0], [1.5525542E12, 14.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.55255429E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.55255369E12, "maxY": 15.2, "series": [{"data": [[1.55255383E12, 0.2], [1.55255385E12, 0.2], [1.55255405E12, 0.1]], "isOverall": false, "label": "Get availability-failure", "isController": false}, {"data": [[1.55255377E12, 14.9], [1.55255394E12, 15.0], [1.55255411E12, 15.1], [1.55255428E12, 15.1], [1.55255385E12, 14.7], [1.55255402E12, 15.1], [1.55255419E12, 15.0], [1.55255376E12, 15.1], [1.55255393E12, 14.9], [1.5525541E12, 14.9], [1.55255427E12, 14.9], [1.55255384E12, 15.0], [1.55255401E12, 14.9], [1.55255418E12, 15.0], [1.55255375E12, 14.9], [1.55255392E12, 15.0], [1.55255409E12, 14.9], [1.55255426E12, 14.9], [1.55255383E12, 14.9], [1.552554E12, 14.9], [1.55255417E12, 15.1], [1.55255374E12, 15.1], [1.55255391E12, 15.0], [1.55255408E12, 15.0], [1.55255425E12, 14.9], [1.55255382E12, 14.9], [1.55255399E12, 15.0], [1.55255416E12, 14.9], [1.55255373E12, 15.0], [1.5525539E12, 15.0], [1.55255407E12, 15.0], [1.55255424E12, 15.1], [1.55255381E12, 15.1], [1.55255398E12, 15.0], [1.55255415E12, 15.0], [1.55255372E12, 14.9], [1.55255389E12, 14.9], [1.55255406E12, 15.1], [1.55255423E12, 15.0], [1.5525538E12, 14.8], [1.55255397E12, 14.9], [1.55255414E12, 14.8], [1.55255371E12, 14.9], [1.55255388E12, 15.1], [1.55255405E12, 14.8], [1.55255422E12, 15.0], [1.55255379E12, 15.2], [1.55255396E12, 15.0], [1.55255413E12, 15.0], [1.5525537E12, 14.9], [1.55255387E12, 15.0], [1.55255404E12, 14.9], [1.55255421E12, 14.9], [1.55255378E12, 14.8], [1.55255395E12, 15.0], [1.55255412E12, 15.0], [1.55255429E12, 2.4], [1.55255369E12, 12.9], [1.55255386E12, 14.9], [1.55255403E12, 15.0], [1.5525542E12, 14.9]], "isOverall": false, "label": "Get availability-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.55255429E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.55255369E12, "maxY": 15.2, "series": [{"data": [[1.55255377E12, 14.9], [1.55255394E12, 15.0], [1.55255411E12, 15.1], [1.55255428E12, 15.1], [1.55255385E12, 14.7], [1.55255402E12, 15.1], [1.55255419E12, 15.0], [1.55255376E12, 15.1], [1.55255393E12, 14.9], [1.5525541E12, 14.9], [1.55255427E12, 14.9], [1.55255384E12, 15.0], [1.55255401E12, 14.9], [1.55255418E12, 15.0], [1.55255375E12, 14.9], [1.55255392E12, 15.0], [1.55255409E12, 14.9], [1.55255426E12, 14.9], [1.55255383E12, 14.9], [1.552554E12, 14.9], [1.55255417E12, 15.1], [1.55255374E12, 15.1], [1.55255391E12, 15.0], [1.55255408E12, 15.0], [1.55255425E12, 14.9], [1.55255382E12, 14.9], [1.55255399E12, 15.0], [1.55255416E12, 14.9], [1.55255373E12, 15.0], [1.5525539E12, 15.0], [1.55255407E12, 15.0], [1.55255424E12, 15.1], [1.55255381E12, 15.1], [1.55255398E12, 15.0], [1.55255415E12, 15.0], [1.55255372E12, 14.9], [1.55255389E12, 14.9], [1.55255406E12, 15.1], [1.55255423E12, 15.0], [1.5525538E12, 14.8], [1.55255397E12, 14.9], [1.55255414E12, 14.8], [1.55255371E12, 14.9], [1.55255388E12, 15.1], [1.55255405E12, 14.8], [1.55255422E12, 15.0], [1.55255379E12, 15.2], [1.55255396E12, 15.0], [1.55255413E12, 15.0], [1.5525537E12, 14.9], [1.55255387E12, 15.0], [1.55255404E12, 14.9], [1.55255421E12, 14.9], [1.55255378E12, 14.8], [1.55255395E12, 15.0], [1.55255412E12, 15.0], [1.55255429E12, 2.4], [1.55255369E12, 12.9], [1.55255386E12, 14.9], [1.55255403E12, 15.0], [1.5525542E12, 14.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.55255383E12, 0.2], [1.55255385E12, 0.2], [1.55255405E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.55255429E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

