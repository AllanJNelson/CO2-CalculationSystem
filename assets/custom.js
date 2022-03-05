$(document).ready(function(){

        var m;
        for (m in saved_fuel_data) {
            $('#'+saved_fuel_data[m].key).html(saved_fuel_data[m].value);
        }
        for (m in saved_fuel_data){
                    if (saved_fuel_data[m].value !== null) {
                        for(var r = 1; r <= 8; r++){
                            for( var t = 1; t <= 12; t++)
                            {
                                var c1 = r+'-'+t+'-'+'F'+1+'-'+'I';
                                var c2 = r+'-'+t+'-'+'F'+2+'-'+'I';
                                var c3 = r+'-'+t+'-'+'F'+3+'-'+'I';
                                var c4 = r+'-'+t+'-'+'F'+4+'-'+'I';
                                var c5 = r+'-'+t+'-'+'F'+5+'-'+'I';

                                if (saved_fuel_data[m].key == c1)
                                {
                                    $('#'+r+'-'+t+'-'+'F'+1+'-'+'O').html((parseFloat(saved_fuel_data[m].value) * parseFloat($('#K'+(24+t-1)).html()) * parseFloat($('#F11').html()) / 1000000).toFixed(2));
                                }
                                if (saved_fuel_data[m].key == c2)
                                {
                                    if (r == 6){
                                        $('#'+r+'-'+t+'-'+'F'+2+'-'+'O').html((parseFloat(saved_fuel_data[m].value) * parseFloat($('#F11').html()) * parseFloat($('#I'+(24+t-1)).html()) / 1000000).toFixed(2));
                                    }
                                    else {
                                        $('#'+r+'-'+t+'-'+'F'+2+'-'+'O').html((parseFloat(saved_fuel_data[m].value) * parseFloat($('#F11').html()) * parseFloat($('#I'+(24+t-1)).html()) * parseFloat($('#K'+(56+t-1)).html()) / 1000000).toFixed(2));
                                    }
                                }
                                if (saved_fuel_data[m].key == c3)
                                {
                                    $('#'+r+'-'+t+'-'+'F'+3+'-'+'O').html((parseFloat(saved_fuel_data[m].value) * parseFloat($('#F10').html()) * parseFloat($('#E'+(24+t-1)).html()) / 1000000).toFixed(2));
                                }
                                if (saved_fuel_data[m].key == c4)
                                {
                                    $('#'+r+'-'+t+'-'+'F'+4+'-'+'O').html((parseFloat(saved_fuel_data[m].value) * parseFloat($('#F8').html()) * parseFloat($('#D'+(24+t-1)).html()) / 1000000).toFixed(2));
                                }
                                if (saved_fuel_data[m].key == c5)
                                {
                                    $('#'+r+'-'+t+'-'+'F'+5+'-'+'O').html((parseFloat(saved_fuel_data[m].value) * parseFloat($('#F9').html()) * parseFloat($('#H21').html()) / 1000000).toFixed(2));
                                }

                            }
                        }
                    }

        }

        var a;
        var b;
        for (a = 1; a <= 8; a++)
        {
                var F1 = null, U1 = null, F2 = null, U2 = null, F3 = null, U3 = null, F4 = null, U4 = null, F5 = null, U5 = null;
                for (b = 1; b <= 12; b++)
                {

                    if (document.getElementById(a+'-'+b+'-F1-I').innerText == '') {
                        F1 = F1;
                    }
                    else {
                        F1 = F1 + parseFloat(document.getElementById(a+'-'+b+'-F1-I').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F1-O').innerText == '') {
                        U1 = U1;
                    }
                    else {
                        U1 = U1 + parseFloat(document.getElementById(a+'-'+b+'-F1-O').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F2-I').innerText == '') {
                        F2 = F2;
                    }
                    else {
                        F2 = F2 + parseFloat(document.getElementById(a+'-'+b+'-F2-I').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F2-O').innerText == '') {
                        U2 = U2;
                    }
                    else {
                        U2 = U2 + parseFloat(document.getElementById(a+'-'+b+'-F2-O').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F3-I').innerText == '') {
                        F3 = F3;
                    }
                    else {
                        F3 = F3 + parseFloat(document.getElementById(a+'-'+b+'-F3-I').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F3-O').innerText == '') {
                        U3 = U3;
                    }
                    else {
                        U3 = U3 + parseFloat(document.getElementById(a+'-'+b+'-F3-O').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F4-I').innerText == '') {
                        F4 = F4;
                    }
                    else {
                        F4 = F4 + parseFloat(document.getElementById(a+'-'+b+'-F4-I').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F4-O').innerText == '') {
                        U4 = U4;
                    }
                    else {
                        U4 = U4 + parseFloat(document.getElementById(a+'-'+b+'-F4-O').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F5-I').innerText == '') {
                        F5 = F5;
                    }
                    else {
                        F5 = F5 + parseFloat(document.getElementById(a+'-'+b+'-F5-I').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F5-O').innerText == '') {
                        U5 = U5;
                    }
                    else {
                        U5 = U5 + parseFloat(document.getElementById(a+'-'+b+'-F5-O').innerText);
                    }
                }

                $('#'+a+'-T-F1-I').html(F1.toFixed(2));
                $('#'+a+'-T-F1-O').html(U1.toFixed(2));
                $('#'+a+'-T-F2-I').html(F2.toFixed(2));
                $('#'+a+'-T-F2-O').html(U2.toFixed(2));
                $('#'+a+'-T-F3-I').html(F3.toFixed(2));
                $('#'+a+'-T-F3-O').html(U3.toFixed(2));
                $('#'+a+'-T-F4-I').html(F4.toFixed(2));
                $('#'+a+'-T-F4-O').html(U4.toFixed(2));
                $('#'+a+'-T-F5-I').html(F5.toFixed(2));
                $('#'+a+'-T-F5-O').html(U5.toFixed(2));

        }

        var k;
        var l;
        var h;
        for (k = 1; k <= 8; k++){
                for (l = 1; l <= 12; l++){

                        var m_usepa = 0;
                        for (h = 1; h <= 5; h++)
                        {
                            m_usepa += parseFloat($('#'+k+'-'+l+'-F'+h+'-O').html());
                        }
                        $('#'+k+'-'+l+'-T').html(m_usepa.toFixed(2));
                        $('#'+l+'C'+k).html(m_usepa.toFixed(2));
                }
        }

        var p;
        var mon;
        for (p = 1; p <= 8; p++){
                var tota = null;
                for (mon = 1; mon <= 12; mon++){
                    if (document.getElementById(p+'-'+mon+'-T').innerText == '') {
                        tota = tota;
                    }
                    else {
                        tota += parseFloat($('#'+p+'-'+mon+'-T').html());
                    }
                }
                if (tota == null){
                    document.getElementById(p+'-T-T').innerHTML = '';
                }
                else {
                    document.getElementById(p+'-T-T').innerHTML = tota.toFixed(2);
                }
        }

        test_calc();

        var fin;
        for (fin = 1; fin <= 8; fin++){

                var G90 = parseFloat($('#'+fin+'-T-F1-I').html());
                document.getElementById(fin+'result1').innerHTML = G90.toFixed(2);
                document.getElementById(fin+'result2').innerHTML = (G90 * parseFloat($('#J36').html())).toFixed(2);
                document.getElementById(fin+'result3').innerHTML = (parseFloat($('#'+fin+'result2').html()) * parseFloat($('#J43').html())).toFixed(2);

                var I90 = parseFloat($('#'+fin+'-T-F1-O').html());
                document.getElementById(fin+'result4').innerHTML = I90.toFixed(2);

                var O90 = parseFloat($('#'+fin+'-T-F3-I').html());
                document.getElementById(fin+'result5').innerHTML = O90.toFixed(2);
                document.getElementById(fin+'result6').innerHTML = (O90 * parseFloat($('#E36').html())).toFixed(2);
                document.getElementById(fin+'result7').innerHTML = (parseFloat($('#'+fin+'result6').html()) * parseFloat($('#J43').html())).toFixed(2);

                var Q90 = parseFloat($('#'+fin+'-T-F3-O').html());
                document.getElementById(fin+'result8').innerHTML = Q90.toFixed(2);

                var S90 = parseFloat($('#'+fin+'-T-F4-I').html());
                document.getElementById(fin+'result9').innerHTML = S90.toFixed(2);
                document.getElementById(fin+'result10').innerHTML = (S90 * parseFloat($('#D36').html())).toFixed(2);
                document.getElementById(fin+'result11').innerHTML = (parseFloat($('#'+fin+'result10').html()) * parseFloat($('#J43').html())).toFixed(2);

                var U90 = parseFloat($('#'+fin+'-T-F4-O').html());
                document.getElementById(fin+'result12').innerHTML = U90.toFixed(2);
                document.getElementById(fin+'result13').innerHTML = (parseFloat($('#'+fin+'-T-F5-I').html())).toFixed(2);
                document.getElementById(fin+'result14').innerHTML = (parseFloat($('#'+fin+'-T-F5-I').html()) * parseFloat($('#G21').html())).toFixed(2);
                document.getElementById(fin+'result15').innerHTML = (parseFloat($('#'+fin+'-T-F5-O').html()) * parseFloat($('#J43').html())).toFixed(2);
                document.getElementById(fin+'result16').innerHTML = (parseFloat($('#'+fin+'-T-F5-O').html())).toFixed(2);

                document.getElementById(fin+'result17').innerHTML = (parseFloat($('#'+fin+'-T-F2-I').html())).toFixed(2);
                document.getElementById(fin+'result18').innerHTML = (parseFloat($('#'+fin+'result17').html()) * parseFloat($('#H36').html())).toFixed(2);
                document.getElementById(fin+'result19').innerHTML = (parseFloat($('#'+fin+'result18').html()) * parseFloat($('#J43').html())).toFixed(2);
                document.getElementById(fin+'result20').innerHTML = (parseFloat($('#'+fin+'-T-F2-O').html())).toFixed(2);

                document.getElementById(fin+'result21').innerHTML = (parseFloat($('#'+fin+'result3').html()) + parseFloat($('#'+fin+'result7').html()) + parseFloat($('#'+fin+'result11').html()) + parseFloat($('#'+fin+'result15').html()) + parseFloat($('#'+fin+'result19').html())).toFixed(2);

        }

        var refin;
        var cars = ["Azzour North 1", "Azzour South", "Subbiya", "Shuwaikh", "Shuaiba North", "Shuaiba South", "Doha East", "Doha West"];
        for (refin = 1; refin <= 8; refin++){
                if (document.getElementById(refin+'result3').innerHTML == 'NaN') {

                }
                else{
                    var id = cars[refin-1];
                    var x1 = parseFloat(document.getElementById(refin+'result3').innerHTML);
                    var x2 = parseFloat(document.getElementById(refin+'result7').innerHTML);
                    var x3 = parseFloat(document.getElementById(refin+'result11').innerHTML);
                    var x4 = parseFloat(document.getElementById(refin+'result15').innerHTML);
                    var x5 = parseFloat(document.getElementById(refin+'result19').innerHTML);

                    var y1 = (x1/(x1+x2+x3+x4+x5) * 100).toFixed(2);
                    var y2 = (x2/(x1+x2+x3+x4+x5) * 100).toFixed(2);
                    var y3 = (x3/(x1+x2+x3+x4+x5) * 100).toFixed(2);
                    var y4 = (x4/(x1+x2+x3+x4+x5) * 100).toFixed(2);
                    var y5 = 100-y1-y2-y3-y4;

                    var ny1 = $('#tt3').html();
                    var ny2 = $('#tt7').html();
                    var ny3 = $('#tt11').html();
                    var ny4 = $('#tt15').html();
                    var ny5 = $('#tt19').html();

                    var t = 'Fuel Consumption Profile at ' + cars[refin-1] + '(Mtoe)';

                    chart_statu1(id, t, y1, y2, y3, y4, y5, ny1, ny2, ny3, ny4, ny5);
                }

        }

        var infin;

        for (infin = 1; infin <= 8; infin++){
                if (document.getElementById(infin+'result3').innerHTML == 'NaN') {

                }
                else{
                    var iid = cars[infin - 1]+'-1';
                    var z1 = parseFloat(document.getElementById(infin+'result3').innerHTML);
                    var z2 = parseFloat(document.getElementById(infin+'result7').innerHTML);
                    var z3 = parseFloat(document.getElementById(infin+'result11').innerHTML);
                    var z4 = parseFloat(document.getElementById(infin+'result15').innerHTML);
                    var z5 = parseFloat(document.getElementById(infin+'result19').innerHTML);

                    var nz1 = $('#tt3').html();
                    var nz2 = $('#tt7').html();
                    var nz3 = $('#tt11').html();
                    var nz4 = $('#tt15').html();
                    var nz5 = $('#tt19').html();

                    var ti = 'Fuel Consumption Values at ' + cars[infin-1] + '(Mtoe)';
                    chart_statu2(iid, ti, z1, z2, z3, z4, z5, nz1, nz2, nz3, nz4, nz5);
                }
        }
        var gin;

        for (gin = 1; gin <= 8; gin++){
                if (document.getElementById(gin+'result4').innerHTML == 'NaN') {

                }
                else{
                    var od = cars[gin - 1]+'-2';
                    var c1 = parseFloat(document.getElementById(gin+'result4').innerHTML);
                    var c2 = parseFloat(document.getElementById(gin+'result8').innerHTML);
                    var c3 = parseFloat(document.getElementById(gin+'result12').innerHTML);
                    var c4 = parseFloat(document.getElementById(gin+'result16').innerHTML);
                    var c5 = parseFloat(document.getElementById(gin+'result20').innerHTML);

                    var v1 = (c1/(c1+c2+c3+c4+c5) * 100).toFixed(2);
                    var v2 = (c2/(c1+c2+c3+c4+c5) * 100).toFixed(2);
                    var v3 = (c3/(c1+c2+c3+c4+c5) * 100).toFixed(2);
                    var v4 = (c4/(c1+c2+c3+c4+c5) * 100).toFixed(2);
                    var v5 = 100-v1-v2-v3-v4;

                    var nv1 = $('#tt4').html();
                    var nv2 = $('#tt8').html();
                    var nv3 = $('#tt12').html();
                    var nv4 = $('#tt16').html();
                    var nv5 = $('#tt20').html();

                    var ei = 'CO2 Emissions per fuel type from ' + cars[gin - 1] + '(MtCO2)';
                    chart_statu1(od, ei, v1, v2, v3, v4, v5, nv1, nv2, nv3, nv4, nv5);
                }

        }
        var kin;

        for (kin = 1; kin <= 8; kin++){
            if (document.getElementById(kin+'result4').innerHTML == 'NaN'){

            }
            else{
                var kd = cars[kin - 1]+'-3';
                var h1 = parseFloat(document.getElementById(kin+'result4').innerHTML);
                var h2 = parseFloat(document.getElementById(kin+'result8').innerHTML);
                var h3 = parseFloat(document.getElementById(kin+'result12').innerHTML);
                var h4 = parseFloat(document.getElementById(kin+'result16').innerHTML);
                var h5 = parseFloat(document.getElementById(kin+'result20').innerHTML);

                var nh1 = $('#tt4').html();
                var nh2 = $('#tt8').html();
                var nh3 = $('#tt12').html();
                var nh4 = $('#tt16').html();
                var nh5 = $('#tt20').html();

                var ki = 'CO2 Emissions per fuel type from ' + cars[kin - 1] + '(MtCO2)';
                chart_statu2(kd, ki, h1, h2, h3, h4, h5, nh1, nh2, nh3, nh4, nh5);
            }

        }

        total_co2_chart1();
        total_co2_chart2();

        var lac;
        var noc;
        for (lac = 1; lac <= 13; lac++){
            var lntot = 0;
            for (noc = 1; noc <= 8; noc++){
                lntot += parseFloat($('#'+lac+'C'+noc).text());
            }
            $('#'+lac+'C9').html(lntot.toFixed(2));
        }

        var mm, nn;
        for (mm = 1; mm <= 8; mm++){
            for (nn = 1; nn <= 5; nn++){
                var pp = 4 * nn - 1;
                var result = $('#'+mm+'result'+pp).text();
                $('#'+nn+'m'+mm).html(parseFloat(result));
            }
        }


        var uu, qq;
        for (uu = 1; uu <= 5; uu++)
        {
            var ttl = 0, ttmp = 0, retotal;
            for(qq = 1; qq <= 8; qq++){
                if (document.getElementById(uu+'m'+qq).innerHTML == ''){
                    ttl += ttmp;
                }
                else {
                    ttl += parseFloat($('#'+uu+'m'+qq).html());
                }
            }
            $('#'+uu+'m9').html(parseFloat(ttl).toFixed(2));
        }

        var hp, ip, tp=0;
        for (hp = 1; hp <= 5; hp++){
            for (ip = 1; ip <= 8; ip++){
                if ($('#'+hp+'m'+ip).text() == ''){
                    tp += 0;
                }
                else {
                    tp += parseFloat($('#'+hp+'m'+ip).html());
                }
            }
        }
        $('#total_fuel_consumption').html(tp.toFixed(2));



        var mm;
        for (mm in saved_power_data) {
            $('#'+saved_power_data[mm].key).val(saved_power_data[mm].value);
        }

})



function chart_statu1(i, title, a, b, c, d, e, A, B, C, D, E) {
    var chart = new CanvasJS.Chart(""+i, {
        // exportEnabled: true,
        animationEnabled: true,
        title:{
            text: title,
            fontFamily: "sans-serif",
            fontSize: 22,
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        width: 750,
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: [
                { y: a, name: A },
                { y: b, name: B },
                { y: c, name: C },
                { y: d, name: D },
                { y: e, name: E }
            ]
        }]
    });
    chart.render();
}

function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    }
    else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();

}

function chart_statu2(i, title, a, b, c, d, e, A, B, C, D, E) {

    var chart = new CanvasJS.Chart(""+i, {
        animationEnabled: true,
        title:{
            text: title,
            fontFamily: "sans-serif",
            fontSize: 22,
        },
        width: 750,
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            dataPoints: [
                { y: a, label: A },
                { y: b,  label: B },
                { y: c,  label: C },
                { y: d,  label: D },
                { y: e,  label: E }
            ]
        }]
    });
    chart.render();
}

function test_calc(){
    // get total value year-CO2-amount about each plant(8 plants)

    var i, j;
    for (j = 1; j <= 9; j++){
        var total = 0;
        for (i = 1; i <= 12; i++) {
            var epc;
            epc = document.getElementById(i+'C'+j).innerText;
            if (epc == ''){
                epc = 0;
            }
            total += parseFloat(epc);
        }

        if (total == 0){
            document.getElementById('13C'+j).innerHTML = '';
        }
        else {
            document.getElementById('13C'+j).innerHTML = total.toFixed(2);
        }
    }
}

function test_aci_calc() {
    var m, n;
    for (m = 1; m <= 8; m++){
        var co, po, ao;
        for (n = 1; n <= 13; n++){
            co = document.getElementById(n+'C'+m).innerText;
            po = parseFloat(document.getElementById(n+'P'+m).value);
            if (co == ''){
                document.getElementById(n+'A'+m).innerHTML = '';
            }
            else {
                if(po == 0){
                    ao = 0.00;
                }
                else {
                    ao = parseFloat(parseFloat(co)/po)*1000000;
                    document.getElementById(n+'A'+m).innerHTML = ao.toFixed(2);
                }
            }
        }
    }
}

$(document).ready(function () {
    $('#show_aci').click(function () {
        test_aci_calc();
        average_aci();
    })
})

$(document).ready(function () {
    $('.well').click(function () {
        var plantName = this.textContent;
        if ($('#plantname').html() == ''){
            $('#plantname').append(plantName);
        }
        else {
            $('#plantname').html('');
            $('#plantname').append(plantName);
        }
    })
})

$(document).ready(function () {
    $('#insert_data').click(function () {

        var cars = ["Azzour North 1", "Azzour South", "Subbiya", "Shuwaikh", "Shuaiba North", "Shuaiba South", "Doha East", "Doha West"];
        var rmp = $('#plantname').html();
        var cp;
        for (cp = 0; cp < 8; cp++){
           if (rmp == cars[cp])
           {
               rmp = cp+1;
           }
        }

        $('.nav-tabs a[href="#tab_1_'+rmp+'"]').tab('show');

        var tmp = $('#month').val();
        var fuel1 = $('#fuel1').val();
        var fuel2 = $('#fuel2').val();
        var fuel3 = $('#fuel3').val();
        var fuel4 = $('#fuel4').val();
        var fuel5 = $('#fuel5').val();

        var r;
        var t;
        // r: rmp  t:tmp
        for (r = 1; r <= 8; r++){
            if (r == rmp){
                for (t = 1; t <= 12; t++){
                    if (t == tmp){
                        $('#'+r+'-'+t+'-'+'F'+1+'-'+'I').html(fuel1);
                        $('#'+r+'-'+t+'-'+'F'+2+'-'+'I').html(fuel2);
                        $('#'+r+'-'+t+'-'+'F'+3+'-'+'I').html(fuel3);
                        $('#'+r+'-'+t+'-'+'F'+4+'-'+'I').html(fuel4);
                        $('#'+r+'-'+t+'-'+'F'+5+'-'+'I').html(fuel5);

                        $('#'+r+'-'+t+'-'+'F'+1+'-'+'O').html((fuel1 * parseFloat($('#K'+(24+t-1)).html()) * parseFloat($('#F11').html()) / 1000000).toFixed(2));
                        if (r == 6) {
                            $('#'+r+'-'+t+'-'+'F'+2+'-'+'O').html((fuel2 * parseFloat($('#F11').html()) * parseFloat($('#I'+(24+t-1)).html()) / 1000000).toFixed(2));
                        }
                        else {
                            $('#'+r+'-'+t+'-'+'F'+2+'-'+'O').html((fuel2 * parseFloat($('#F11').html()) * parseFloat($('#I'+(24+t-1)).html()) * parseFloat($('#K'+(56+t-1)).html()) / 1000000).toFixed(2));
                        }
                        $('#'+r+'-'+t+'-'+'F'+3+'-'+'O').html((fuel3 * parseFloat($('#F10').html()) * parseFloat($('#E'+(24+t-1)).html()) / 1000000).toFixed(2));
                        $('#'+r+'-'+t+'-'+'F'+4+'-'+'O').html((fuel4 * parseFloat($('#F8').html()) * parseFloat($('#D'+(24+t-1)).html()) / 1000000).toFixed(2));
                        $('#'+r+'-'+t+'-'+'F'+5+'-'+'O').html((fuel5 * parseFloat($('#F9').html()) * parseFloat($('#H21').html()) / 1000000).toFixed(2));
                    }
                }
            }
        }

        var a;
        var b;
        for (a = 1; a <= 8; a++){
            if (rmp == a){
                var F1 = 0, U1 = 0, F2 = 0, U2 = 0, F3 = 0, U3 = 0, F4 = 0, U4 = 0, F5 = 0, U5 = 0;
                for (b = 1; b <= 12; b++){

                    if (document.getElementById(a+'-'+b+'-F1-I').innerText == '') {
                        F1 = F1;
                    }
                    else {
                        F1 = F1 + parseFloat(document.getElementById(a+'-'+b+'-F1-I').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F1-O').innerText == '') {
                        U1 = U1;
                    }
                    else {
                        U1 = U1 + parseFloat(document.getElementById(a+'-'+b+'-F1-O').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F2-I').innerText == '') {
                        F2 = F2;
                    }
                    else {
                        F2 = F2 + parseFloat(document.getElementById(a+'-'+b+'-F2-I').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F2-O').innerText == '') {
                        U2 = U2;
                    }
                    else {
                        U2 = U2 + parseFloat(document.getElementById(a+'-'+b+'-F2-O').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F3-I').innerText == '') {
                        F3 = F3;
                    }
                    else {
                        F3 = F3 + parseFloat(document.getElementById(a+'-'+b+'-F3-I').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F3-O').innerText == '') {
                        U3 = U3;
                    }
                    else {
                        U3 = U3 + parseFloat(document.getElementById(a+'-'+b+'-F3-O').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F4-I').innerText == '') {
                        F4 = F4;
                    }
                    else {
                        F4 = F4 + parseFloat(document.getElementById(a+'-'+b+'-F4-I').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F4-O').innerText == '') {
                        U4 = U4;
                    }
                    else {
                        U4 = U4 + parseFloat(document.getElementById(a+'-'+b+'-F4-O').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F5-I').innerText == '') {
                        F5 = F5;
                    }
                    else {
                        F5 = F5 + parseFloat(document.getElementById(a+'-'+b+'-F5-I').innerText);
                    }

                    if (document.getElementById(a+'-'+b+'-F5-O').innerText == '') {
                        U5 = U5;
                    }
                    else {
                        U5 = U5 + parseFloat(document.getElementById(a+'-'+b+'-F5-O').innerText);
                    }
                }
                $('#'+a+'-T-F1-I').html(F1.toFixed(2));
                $('#'+a+'-T-F1-O').html(U1.toFixed(2));
                $('#'+a+'-T-F2-I').html(F2.toFixed(2));
                $('#'+a+'-T-F2-O').html(U2.toFixed(2));
                $('#'+a+'-T-F3-I').html(F3.toFixed(2));
                $('#'+a+'-T-F3-O').html(U3.toFixed(2));
                $('#'+a+'-T-F4-I').html(F4.toFixed(2));
                $('#'+a+'-T-F4-O').html(U4.toFixed(2));
                $('#'+a+'-T-F5-I').html(F5.toFixed(2));
                $('#'+a+'-T-F5-O').html(U5.toFixed(2));
            }
        }

        var k;
        var l;
        var h;
        for (k = 1; k <= 8; k++){
            if (k == rmp){
                for (l = 1; l <= 12; l++){
                    if (l == tmp){
                        var m_usepa = 0;
                        for (h = 1; h <= 5; h++){
                            m_usepa += parseFloat($('#'+k+'-'+l+'-F'+h+'-O').html());
                        }
                        $('#'+k+'-'+l+'-T').html(m_usepa.toFixed(2));
                    }
                }
            }
        }

        var p;
        var mon;
        for (p = 1; p <= 8; p++){
            if (p == rmp){
                var tota = 0;
                for (mon = 1; mon <= 12; mon++){
                    if (document.getElementById(p+'-'+mon+'-T').innerText == '') {
                        tota = tota;
                    }
                    else {
                        tota += parseFloat($('#'+p+'-'+mon+'-T').html());
                    }
                }
                document.getElementById(p+'-T-T').innerHTML = tota.toFixed(2);
            }
        }

        var x;
        var ss;
        for (x = 1; x <= 8; x++){
            if (x == rmp){
                for(ss = 1; ss <= 12; ss++){
                    if (ss == tmp){
                        var w1 = fuel1 * parseFloat($('#K'+(24+x-1)).html()) * parseFloat($('#F11').html());
                        var w2 = fuel2 * parseFloat($('#F11').html()) * parseFloat($('#I'+(24+x-1)).html()) * parseFloat($('#K'+(56+x-1)).html());
                        var w3 = fuel3 * parseFloat($('#F10').html()) * parseFloat($('#E'+(24+x-1)).html());
                        var w4 = fuel4 * parseFloat($('#F8').html()) * parseFloat($('#D'+(24+x-1)).html());
                        var w5 = fuel5 * parseFloat($('#F9').html()) * parseFloat($('#H21').html());
                        var w = (w1 + w2 + w3 + w4 + w5) / 1000000;

                        $('#'+ss+'C'+x).html(w.toFixed(2));
                    }
                }
            }
        }


        var lac;
        var noc;
        for (lac = 1; lac <= 13; lac++){
            var lntot = 0;
            for (noc = 1; noc <= 8; noc++){
                lntot += parseFloat($('#'+lac+'C'+noc).text());
            }
            $('#'+lac+'C9').html(lntot.toFixed(2));
        }


        var fin;
        for (fin = 1; fin <= 8; fin++){
            if (rmp == fin){
                var G90 = parseFloat($('#'+fin+'-T-F1-I').html());
                document.getElementById(fin+'result1').innerHTML = G90.toFixed(2);
                document.getElementById(fin+'result2').innerHTML = (G90 * parseFloat($('#J36').html())).toFixed(2);
                document.getElementById(fin+'result3').innerHTML = (parseFloat($('#'+fin+'result2').html()) * parseFloat($('#J43').html())).toFixed(2);

                var I90 = parseFloat($('#'+fin+'-T-F1-O').html());
                document.getElementById(fin+'result4').innerHTML = I90.toFixed(2);

                var O90 = parseFloat($('#'+fin+'-T-F3-I').html());
                document.getElementById(fin+'result5').innerHTML = O90.toFixed(2);
                document.getElementById(fin+'result6').innerHTML = (O90 * parseFloat($('#E36').html())).toFixed(2);
                document.getElementById(fin+'result7').innerHTML = (parseFloat($('#'+fin+'result6').html()) * parseFloat($('#J43').html())).toFixed(2);

                var Q90 = parseFloat($('#'+fin+'-T-F3-O').html());
                document.getElementById(fin+'result8').innerHTML = Q90.toFixed(2);

                var S90 = parseFloat($('#'+fin+'-T-F4-I').html());
                document.getElementById(fin+'result9').innerHTML = S90.toFixed(2);
                document.getElementById(fin+'result10').innerHTML = (S90 * parseFloat($('#D36').html())).toFixed(2);
                document.getElementById(fin+'result11').innerHTML = (parseFloat($('#'+fin+'result10').html()) * parseFloat($('#J43').html())).toFixed(2);

                var U90 = parseFloat($('#'+fin+'-T-F4-O').html());
                document.getElementById(fin+'result12').innerHTML = U90.toFixed(2);
                document.getElementById(fin+'result13').innerHTML = (parseFloat($('#'+fin+'-T-F5-I').html())).toFixed(2);
                document.getElementById(fin+'result14').innerHTML = (parseFloat($('#'+fin+'-T-F5-I').html()) * parseFloat($('#G21').html())).toFixed(2);
                document.getElementById(fin+'result15').innerHTML = (parseFloat($('#'+fin+'-T-F5-O').html()) * parseFloat($('#J43').html())).toFixed(2);
                document.getElementById(fin+'result16').innerHTML = (parseFloat($('#'+fin+'-T-F5-O').html())).toFixed(2);

                document.getElementById(fin+'result17').innerHTML = (parseFloat($('#'+fin+'-T-F2-I').html())).toFixed(2);
                document.getElementById(fin+'result18').innerHTML = (parseFloat($('#'+fin+'result17').html()) * parseFloat($('#H36').html())).toFixed(2);
                document.getElementById(fin+'result19').innerHTML = (parseFloat($('#'+fin+'result18').html()) * parseFloat($('#J43').html())).toFixed(2);
                document.getElementById(fin+'result20').innerHTML = (parseFloat($('#'+fin+'-T-F2-O').html())).toFixed(2);

                document.getElementById(fin+'result21').innerHTML = (parseFloat($('#'+fin+'result3').html()) + parseFloat($('#'+fin+'result7').html()) + parseFloat($('#'+fin+'result11').html()) + parseFloat($('#'+fin+'result15').html()) + parseFloat($('#'+fin+'result19').html())).toFixed(2);
            }
        }


        var refin;

        for (refin = 1; refin <= 8; refin++){
            if (rmp == refin){
                var id = cars[rmp - 1];
                var x1 = parseFloat(document.getElementById(refin+'result3').innerHTML);
                var x2 = parseFloat(document.getElementById(refin+'result7').innerHTML);
                var x3 = parseFloat(document.getElementById(refin+'result11').innerHTML);
                var x4 = parseFloat(document.getElementById(refin+'result15').innerHTML);
                var x5 = parseFloat(document.getElementById(refin+'result19').innerHTML);

                var y1 = (x1/(x1+x2+x3+x4+x5) * 100).toFixed(2);
                var y2 = (x2/(x1+x2+x3+x4+x5) * 100).toFixed(2);
                var y3 = (x3/(x1+x2+x3+x4+x5) * 100).toFixed(2);
                var y4 = (x4/(x1+x2+x3+x4+x5) * 100).toFixed(2);
                var y5 = 100-y1-y2-y3-y4;

                var ny1 = $('#tt3').html();
                var ny2 = $('#tt7').html();
                var ny3 = $('#tt11').html();
                var ny4 = $('#tt15').html();
                var ny5 = $('#tt19').html();

                var t = 'Fuel Consumption Profile at ' + cars[rmp - 1] + '(Mtoe)';

                chart_statu1(id, t, y1, y2, y3, y4, y5, ny1, ny2, ny3, ny4, ny5);
            }
        }

        var infin;

        for (infin = 1; infin <= 8; infin++){
            if (rmp == infin)
            {
                var iid = cars[rmp - 1]+'-1';
                var z1 = parseFloat(document.getElementById(infin+'result3').innerHTML);
                var z2 = parseFloat(document.getElementById(infin+'result7').innerHTML);
                var z3 = parseFloat(document.getElementById(infin+'result11').innerHTML);
                var z4 = parseFloat(document.getElementById(infin+'result15').innerHTML);
                var z5 = parseFloat(document.getElementById(infin+'result19').innerHTML);

                var nz1 = $('#tt3').html();
                var nz2 = $('#tt7').html();
                var nz3 = $('#tt11').html();
                var nz4 = $('#tt15').html();
                var nz5 = $('#tt19').html();

                var ti = 'Fuel Consumption Values at ' + cars[rmp - 1] + '(Mtoe)';
                chart_statu2(iid, ti, z1, z2, z3, z4, z5, nz1, nz2, nz3, nz4, nz5);
            }
        }

        var gin;

        for (gin = 1; gin <= 8; gin++){
            if (rmp == gin)
            {
                var od = cars[rmp - 1]+'-2';
                var c1 = parseFloat(document.getElementById(gin+'result4').innerHTML);
                var c2 = parseFloat(document.getElementById(gin+'result8').innerHTML);
                var c3 = parseFloat(document.getElementById(gin+'result12').innerHTML);
                var c4 = parseFloat(document.getElementById(gin+'result16').innerHTML);
                var c5 = parseFloat(document.getElementById(gin+'result20').innerHTML);

                var v1 = (c1/(c1+c2+c3+c4+c5) * 100).toFixed(2);
                var v2 = (c2/(c1+c2+c3+c4+c5) * 100).toFixed(2);
                var v3 = (c3/(c1+c2+c3+c4+c5) * 100).toFixed(2);
                var v4 = (c4/(c1+c2+c3+c4+c5) * 100).toFixed(2);
                var v5 = 100-v1-v2-v3-v4;

                var nv1 = $('#tt4').html();
                var nv2 = $('#tt8').html();
                var nv3 = $('#tt12').html();
                var nv4 = $('#tt16').html();
                var nv5 = $('#tt20').html();

                var ei = 'CO2 Emissions per fuel type from ' + cars[rmp - 1] + '(MtCO2)';
                chart_statu1(od, ei, v1, v2, v3, v4, v5, nv1, nv2, nv3, nv4, nv5);
            }
        }


        var kin;

        for (kin = 1; kin <= 8; kin++){
            if (rmp == kin)
            {
                var kd = cars[rmp - 1]+'-3';
                var h1 = parseFloat(document.getElementById(kin+'result4').innerHTML);
                var h2 = parseFloat(document.getElementById(kin+'result8').innerHTML);
                var h3 = parseFloat(document.getElementById(kin+'result12').innerHTML);
                var h4 = parseFloat(document.getElementById(kin+'result16').innerHTML);
                var h5 = parseFloat(document.getElementById(kin+'result20').innerHTML);

                var nh1 = $('#tt4').html();
                var nh2 = $('#tt8').html();
                var nh3 = $('#tt12').html();
                var nh4 = $('#tt16').html();
                var nh5 = $('#tt20').html();

                var ki = 'CO2 Emissions per fuel type from ' + cars[rmp - 1] + '(MtCO2)';
                chart_statu2(kd, ki, h1, h2, h3, h4, h5, nh1, nh2, nh3, nh4, nh5);
            }
        }

        var mm, nn;
        for (mm = 1; mm <= 8; mm++){
            if (mm == rmp) {
                for (nn = 1; nn <= 5; nn++){
                    var pp = 4 * nn - 1;
                    var result = $('#'+mm+'result'+pp).text();
                    $('#'+nn+'m'+mm).html(parseFloat(result));
                }
            }
        }


        var uu, qq;
        for (uu = 1; uu <= 5; uu++)
        {
            var ttl = 0, ttmp = 0;
            for(qq = 1; qq <= 8; qq++){
                if (document.getElementById(uu+'m'+qq).innerHTML == ''){
                    ttl += ttmp;
                }
                else {
                    ttl += parseFloat($('#'+uu+'m'+qq).html());
                }
            }
            $('#'+uu+'m9').html(ttl.toFixed(2));
        }

        var hp, ip, tp=0;
        for (hp = 1; hp <= 5; hp++){
            for (ip = 1; ip <= 8; ip++){
                if ($('#'+hp+'m'+ip).text() == ''){
                    tp += 0;
                }
                else {
                    tp += parseFloat($('#'+hp+'m'+ip).html());
                }
            }
        }
        $('#total_fuel_consumption').html(tp.toFixed(2));

        test_calc();
        total_co2_chart1();
        total_co2_chart2();

        total_his_chart2();

        Highcharts.chart('fuel_cons_chart1', {
            chart: {
                type: 'column',
                width: 750
            },
            title: {
                text: "Total Fuel Consumption Values for Kuwait's Energy Sector in 2017 (Mtoe)",
            },
            xAxis: {
                categories: ['AZN1', 'AZS', 'Subbiya', 'Shuwaikh', 'Shuaiba North', 'Shuaiba South', 'Doha East', 'Doha West']
            },
            yAxis: {
                min: 0,
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'gray'
                    }
                }
            },
            exporting: {
                enabled: false
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [{
                name: 'HP+LNG',
                data: [parseFloat($('#1m1').text()), parseFloat($('#1m2').text()), parseFloat($('#1m3').text()), parseFloat($('#1m4').text()), parseFloat($('#1m5').text()), parseFloat($('#1m6').text()), parseFloat($('#1m7').text()), parseFloat($('#1m8').text())]
            }, {
                name: 'Gas Oil',
                data: [parseFloat($('#2m1').text()), parseFloat($('#2m2').text()), parseFloat($('#2m3').text()), parseFloat($('#2m4').text()), parseFloat($('#2m5').text()), parseFloat($('#2m6').text()), parseFloat($('#2m7').text()), parseFloat($('#2m8').text())]
            }, {
                name: 'HFO',
                data: [parseFloat($('#3m1').text()), parseFloat($('#3m2').text()), parseFloat($('#3m3').text()), parseFloat($('#3m4').text()), parseFloat($('#3m5').text()), parseFloat($('#3m6').text()), parseFloat($('#3m7').text()), parseFloat($('#3m8').text())]
            },{
                name: 'Crude Oil',
                data: [parseFloat($('#4m1').text()), parseFloat($('#4m2').text()), parseFloat($('#4m3').text()), parseFloat($('#4m4').text()), parseFloat($('#4m5').text()), parseFloat($('#4m6').text()), parseFloat($('#4m7').text()), parseFloat($('#4m8').text())]
            },{
                name: 'LP',
                data: [parseFloat($('#5m1').text()), parseFloat($('#5m2').text()), parseFloat($('#5m3').text()), parseFloat($('#5m4').text()), parseFloat($('#5m5').text()), parseFloat($('#5m6').text()), parseFloat($('#5m7').text()), parseFloat($('#5m8').text())]
            }]
        });

        var idd = 'fuel_cons_chart2';
        var ww1 = parseFloat($('#1m9').text());
        var ww2 = parseFloat($('#2m9').text());
        var ww3 = parseFloat($('#3m9').text());
        var ww4 = parseFloat($('#4m9').text());
        var ww5 = parseFloat($('#5m9').text());

        var cc1 = ((ww1 / (ww1 + ww2 + ww3 + ww4 + ww5))*100).toFixed(2);
        var cc2 = ((ww2 / (ww1 + ww2 + ww3 + ww4 + ww5))*100).toFixed(2);
        var cc3 = ((ww3 / (ww1 + ww2 + ww3 + ww4 + ww5))*100).toFixed(2);
        var cc4 = ((ww4 / (ww1 + ww2 + ww3 + ww4 + ww5))*100).toFixed(2);
        var cc5 = 100-cc1-cc2-cc3-cc4;

        var nw1 = 'HP+LNG';
        var nw2 = 'Gas Oil';
        var nw3 = 'HFO';
        var nw4 = 'Crude Oil';
        var nw5 = 'LP';

        var nt = "Total Fuel Consumption Profile for Kuwait's Energy Sector in 2017 (Mtoe)";
        chart_statu1(idd, nt, cc1, cc2, cc3, cc4, cc5, nw1, nw2, nw3, nw4, nw5);


        var cylinder1 = parseFloat($('#13C1').html());
        if (document.getElementById('13C1').innerHTML == ''){ cylinder1 = 0; }
        var cylinder2 = parseFloat($('#13C2').html());
        if (document.getElementById('13C2').innerHTML == ''){ cylinder2 = 0; }
        var cylinder3 = parseFloat($('#13C3').html());
        if (document.getElementById('13C3').innerHTML == ''){ cylinder3 = 0; }
        var cylinder4 = parseFloat($('#13C4').html());
        if (document.getElementById('13C4').innerHTML == ''){ cylinder4 = 0; }
        var cylinder5 = parseFloat($('#13C5').html());
        if (document.getElementById('13C5').innerHTML == ''){ cylinder5 = 0; }
        var cylinder6 = parseFloat($('#13C6').html());
        if (document.getElementById('13C6').innerHTML == ''){ cylinder6 = 0; }
        var cylinder7 = parseFloat($('#13C7').html());
        if (document.getElementById('13C7').innerHTML == ''){ cylinder7 = 0; }
        var cylinder8 = parseFloat($('#13C8').html());
        if (document.getElementById('13C8').innerHTML == ''){ cylinder8 = 0; }

        Highcharts.chart('chart1_1', {
            chart: {
                type: 'cylinder',
                width: 380,
                backgroundColor: 'transparent',
                color: 'red',
                options3d: {
                    enabled: true,
                    alpha: 22,
                    beta: -15,
                    depth: 50,
                    viewDistance: 25
                }
            },
            colors: [
                '#a72010'
            ],
            title: {
                text: ''
            },
            plotOptions: {
                series: {
                    pointWidth: 23
                }
            },
            series: [{
                //data: [cylinder1, cylinder2, cylinder3, cylinder4],
                data: [
                    {
                        y : cylinder8,
                        descriptiveTooltip : 'Doha West',
                        visible: false
                    },
                    {
                        y : cylinder7,
                        descriptiveTooltip : 'Doha East'
                    },
                    {
                        y : cylinder4,
                        descriptiveTooltip : 'Shuwaikh'
                    },
                    {
                        y : cylinder3,
                        descriptiveTooltip : 'Subbiya'
                    }
                ],
                name: 'Cylinders',
                showInLegend: false
            }],
            tooltip: {
                formatter: function() {
                    return '<b>' + this.point.descriptiveTooltip + '</b>' + ':  ' + '<br>' + this.y + '(MtCO2)';
                }
            },
            xAxis: [{
                visible: false
            }],
            yAxis: [{
                visible: false
            }],
            exporting: {
                enabled: false
            }
        });

        Highcharts.chart('chart1_2', {
            chart: {
                type: 'cylinder',
                width: 150,
                backgroundColor: 'transparent',
                color: 'red',
                options3d: {
                    enabled: true,
                    alpha: 22,
                    beta: 50,
                    depth: 50,
                    viewDistance: 25
                }
            },
            colors: [
                '#a72010'
            ],
            title: {
                text: ''
            },
            plotOptions: {
                series: {
                    pointWidth: 50
                }
            },
            series: [{
                data: [
                    {
                        y : cylinder5,
                        descriptiveTooltip : 'Shuaiba North',
                    },
                    {
                        y : cylinder6,
                        descriptiveTooltip : 'Shuaiba South'
                    }
                ],
                name: 'Cylinders',
                showInLegend: false
            }],
            tooltip: {
                formatter: function() {
                    return '<b>' + this.point.descriptiveTooltip + '</b>' + ':  ' + '<br>' + this.y + '(MtCO2)';
                }
            },
            xAxis: [{
                visible: false
            }],
            yAxis: [{
                visible: false
            }],
            exporting: {
                enabled: false
            }
        });

        Highcharts.chart('chart1_3', {
            chart: {
                type: 'cylinder',
                width: 150,
                backgroundColor: 'transparent',
                color: 'red',
                options3d: {
                    enabled: true,
                    alpha: 22,
                    beta: 55,
                    depth: 50,
                    viewDistance: 25
                }
            },
            colors: [
                '#a72010'
            ],
            title: {
                text: ''
            },
            plotOptions: {
                series: {
                    pointWidth: 50
                }
            },
            series: [{
                data: [
                    {
                        y : cylinder1,
                        descriptiveTooltip : 'Az-Zour North1',
                    },
                    {
                        y : cylinder2,
                        descriptiveTooltip : 'Az-Zour South'
                    }
                ],
                name: 'Cylinders',
                showInLegend: false
            }],
            tooltip: {
                formatter: function() {
                    return '<b>' + this.point.descriptiveTooltip + '</b>' + ':  ' + '<br>' + this.y + '(MtCO2)';
                }
            },
            xAxis: [{
                visible: false
            }],
            yAxis: [{
                visible: false
            }],
            exporting: {
                enabled: false
            }
        });

    })
})

function total_co2_chart1() {

    var a = parseFloat(document.getElementById('13C1').innerHTML);
    if (document.getElementById('13C1').innerHTML == ''){
        a = 0;
    }
    var b = parseFloat(document.getElementById('13C2').innerHTML);
    if (document.getElementById('13C2').innerHTML == ''){
        b = 0;
    }
    var c = parseFloat(document.getElementById('13C3').innerHTML);
    if (document.getElementById('13C3').innerHTML == ''){
        c = 0;
    }
    var d = parseFloat(document.getElementById('13C4').innerHTML);
    if (document.getElementById('13C4').innerHTML == ''){
        d = 0;
    }
    var e = parseFloat(document.getElementById('13C5').innerHTML);
    if (document.getElementById('13C5').innerHTML == ''){
        e = 0;
    }
    var f = parseFloat(document.getElementById('13C6').innerHTML);
    if (document.getElementById('13C6').innerHTML == ''){
        f = 0;
    }
    var g = parseFloat(document.getElementById('13C7').innerHTML);
    if (document.getElementById('13C7').innerHTML == ''){
        g = 0;
    }
    var h = parseFloat(document.getElementById('13C8').innerHTML);
    if (document.getElementById('13C8').innerHTML == ''){
        h = 0;
    }

    var A = (a / (a + b + c + d + e + f + g + h) * 100).toFixed(2);
    var B = (b / (a + b + c + d + e + f + g + h) * 100).toFixed(2);
    var C = (c / (a + b + c + d + e + f + g + h) * 100).toFixed(2);
    var D = (d / (a + b + c + d + e + f + g + h) * 100).toFixed(2);
    var E = (e / (a + b + c + d + e + f + g + h) * 100).toFixed(2);
    var F = (f / (a + b + c + d + e + f + g + h) * 100).toFixed(2);
    var G = (g / (a + b + c + d + e + f + g + h) * 100).toFixed(2);
    var H = 100-A-B-C-D-E-F-G;

    var chart = new CanvasJS.Chart("Total_co2_1", {
        animationEnabled: true,
        title:{
            text: 'Total CO2 Emission per Power Plant for 2017 (MtCO2)',
            fontFamily: "sans-serif",
            fontSize: 22,
        },
        width: 750,
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: A, label: "AZN1" },
                { y: B, label: "AZS" },
                { y: C, label: "Subbiya" },
                { y: D, label: "Shuwaikh" },
                { y: E, label: "Sh_North" },
                { y: F, label: "Sh_South" },
                { y: G, label: "Doha East" },
                { y: H, label: "Doha West" }
            ]
        }]
    });
    chart.render();
}

function total_co2_chart2() {

    var aa = parseFloat(document.getElementById('13C1').innerHTML);
    if (document.getElementById('13C1').innerHTML == ''){
        aa = 0;
    }
    var bb = parseFloat(document.getElementById('13C2').innerHTML);
    if (document.getElementById('13C2').innerHTML == ''){
        bb= 0;
    }
    var cc = parseFloat(document.getElementById('13C3').innerHTML);
    if (document.getElementById('13C3').innerHTML == ''){
        cc = 0;
    }
    var dd = parseFloat(document.getElementById('13C4').innerHTML);
    if (document.getElementById('13C4').innerHTML == ''){
        dd = 0;
    }
    var ee = parseFloat(document.getElementById('13C5').innerHTML);
    if (document.getElementById('13C5').innerHTML == ''){
        ee = 0;
    }
    var ff = parseFloat(document.getElementById('13C6').innerHTML);
    if (document.getElementById('13C6').innerHTML == ''){
        ff = 0;
    }
    var gg = parseFloat(document.getElementById('13C7').innerHTML);
    if (document.getElementById('13C7').innerHTML == ''){
        gg = 0;
    }
    var hh = parseFloat(document.getElementById('13C8').innerHTML);
    if (document.getElementById('13C8').innerHTML == ''){
        hh = 0;
    }
    var chart = new CanvasJS.Chart("Total_co2_2", {
        animationEnabled: true,
        title:{
            text: 'Total CO2 Emission per Power Plant for 2017 (MtCO2)',
            fontFamily: "sans-serif",
            fontSize: 22,
        },
        width: 750,
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            dataPoints: [
                { y: aa, label: "AZN1" },
                { y: bb, label: "AZS" },
                { y: cc, label: "Subbiya" },
                { y: dd, label: "Shuwaikh" },
                { y: ee, label: "Sh_North" },
                { y: ff, label: "Sh_South" },
                { y: gg, label: "Doha East" },
                { y: hh, label: "Doha West" }
            ]
        }]
    });
    chart.render();
}

$(document).ready(function () {

    var cylinder1 = parseFloat($('#13C1').html());
        if (document.getElementById('13C1').innerHTML == ''){ cylinder1 = 0; }
    var cylinder2 = parseFloat($('#13C2').html());
        if (document.getElementById('13C2').innerHTML == ''){ cylinder2 = 0; }
    var cylinder3 = parseFloat($('#13C3').html());
        if (document.getElementById('13C3').innerHTML == ''){ cylinder3 = 0; }
    var cylinder4 = parseFloat($('#13C4').html());
        if (document.getElementById('13C4').innerHTML == ''){ cylinder4 = 0; }
    var cylinder5 = parseFloat($('#13C5').html());
        if (document.getElementById('13C5').innerHTML == ''){ cylinder5 = 0; }
    var cylinder6 = parseFloat($('#13C6').html());
        if (document.getElementById('13C6').innerHTML == ''){ cylinder6 = 0; }
    var cylinder7 = parseFloat($('#13C7').html());
        if (document.getElementById('13C7').innerHTML == ''){ cylinder7 = 0; }
    var cylinder8 = parseFloat($('#13C8').html());
        if (document.getElementById('13C8').innerHTML == ''){ cylinder8 = 0; }

    Highcharts.chart('chart1_1', {
        chart: {
            type: 'cylinder',
            width: 380,
            backgroundColor: 'transparent',
            color: 'red',
            options3d: {
                enabled: true,
                alpha: 22,
                beta: -15,
                depth: 50,
                viewDistance: 25
            }
        },
        colors: [
            '#a72010'
        ],
        title: {
            text: ''
        },
        plotOptions: {
            series: {
                pointWidth: 23
            }
        },
        series: [{
            //data: [cylinder1, cylinder2, cylinder3, cylinder4],
            data: [
                {
                    y : cylinder8,
                    descriptiveTooltip : 'Doha West',
                    visible: false
                },
                {
                    y : cylinder7,
                    descriptiveTooltip : 'Doha East'
                },
                {
                    y : cylinder4,
                    descriptiveTooltip : 'Shuwaikh'
                },
                {
                    y : cylinder3,
                    descriptiveTooltip : 'Subbiya'
                }
            ],
            name: 'Cylinders',
            showInLegend: false
        }],
        tooltip: {
            formatter: function() {
                return '<b>' + this.point.descriptiveTooltip + '</b>' + ':  ' + '<br>' + this.y + '(MtCO2)';
            }
        },
        xAxis: [{
            visible: false
        }],
        yAxis: [{
            visible: false
        }],
        exporting: {
            enabled: false
        }
    });

    Highcharts.chart('chart1_2', {
        chart: {
            type: 'cylinder',
            width: 150,
            backgroundColor: 'transparent',
            color: 'red',
            options3d: {
                enabled: true,
                alpha: 22,
                beta: 50,
                depth: 50,
                viewDistance: 25
            }
        },
        colors: [
            '#a72010'
        ],
        title: {
            text: ''
        },
        plotOptions: {
            series: {
                pointWidth: 50
            }
        },
        series: [{
            data: [
                {
                    y : cylinder5,
                    descriptiveTooltip : 'Shuaiba North',
                },
                {
                    y : cylinder6,
                    descriptiveTooltip : 'Shuaiba South'
                }
            ],
            name: 'Cylinders',
            showInLegend: false
        }],
        tooltip: {
            formatter: function() {
                return '<b>' + this.point.descriptiveTooltip + '</b>' + ':  ' + this.y + '(MtCO2)';
            }
        },
        xAxis: [{
            visible: false
        }],
        yAxis: [{
            visible: false
        }],
        exporting: {
            enabled: false
        }
    });

    Highcharts.chart('chart1_3', {
        chart: {
            type: 'cylinder',
            width: 150,
            backgroundColor: 'transparent',
            color: 'red',
            options3d: {
                enabled: true,
                alpha: 22,
                beta: 55,
                depth: 50,
                viewDistance: 25
            }
        },
        colors: [
            '#a72010'
        ],
        title: {
            text: ''
        },
        plotOptions: {
            series: {
                pointWidth: 50
            }
        },
        series: [{
            data: [
                {
                    y : cylinder1,
                    descriptiveTooltip : 'Az-Zour North1',
                },
                {
                    y : cylinder2,
                    descriptiveTooltip : 'Az-Zour South'
                }
            ],
            name: 'Cylinders',
            showInLegend: false
        }],
        tooltip: {
            formatter: function() {
                return '<b>' + this.point.descriptiveTooltip + '</b>' + ':  ' + this.y + '(MtCO2)';
            }
        },
        xAxis: [{
            visible: false
        }],
        yAxis: [{
            visible: false
        }],
        exporting: {
            enabled: false
        }
    });
})

function total_aci_chart1() {

    var a = parseFloat(document.getElementById('13A1').innerHTML);
    if (document.getElementById('13A1').innerHTML == ''){
        a = 0;
    }
    var b = parseFloat(document.getElementById('13A2').innerHTML);
    if (document.getElementById('13A2').innerHTML == ''){
        b = 0;
    }
    var c = parseFloat(document.getElementById('13A3').innerHTML);
    if (document.getElementById('13A3').innerHTML == ''){
        c = 0;
    }
    // var d = parseFloat(document.getElementById('13A4').innerHTML);
    // if (document.getElementById('13A4').innerHTML == ''){
    //     d = 0;
    // }
    var e = parseFloat(document.getElementById('13A5').innerHTML);
    if (document.getElementById('13A5').innerHTML == ''){
        e = 0;
    }
    var f = parseFloat(document.getElementById('13A6').innerHTML);
    if (document.getElementById('13A6').innerHTML == ''){
        f = 0;
    }
    var g = parseFloat(document.getElementById('13A7').innerHTML);
    if (document.getElementById('13A7').innerHTML == ''){
        g = 0;
    }
    var h = parseFloat(document.getElementById('13A8').innerHTML);
    if (document.getElementById('13A8').innerHTML == ''){
        h = 0;
    }

    var A = (a / (a + b + c + e + f + g + h) * 100).toFixed(2);
    var B = (b / (a + b + c + e + f + g + h) * 100).toFixed(2);
    var C = (c / (a + b + c + e + f + g + h) * 100).toFixed(2);
    // var D = (d / (a + b + c + d + e + f + g + h) * 100).toFixed(2);
    var E = (e / (a + b + c + e + f + g + h) * 100).toFixed(2);
    var F = (f / (a + b + c + e + f + g + h) * 100).toFixed(2);
    var G = (g / (a + b + c + e + f + g + h) * 100).toFixed(2);
    var H = 100-A-B-C-E-F-G;

    var chart = new CanvasJS.Chart("Total_aci_1", {
        animationEnabled: true,
        title:{
            text: 'ACI for Power Plants (kgCO2/kWhr)',
            fontFamily: "sans-serif",
            fontSize: 22,
        },
        width: 750,
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: A, label: "AZN1" },
                { y: B, label: "AZS" },
                { y: C, label: "Subbiya" },
                // { y: D, label: "Shuwaikh" },
                { y: E, label: "Sh_North" },
                { y: F, label: "Sh_South" },
                { y: G, label: "Doha East" },
                { y: H, label: "Doha West" }
            ]
        }]
    });
    chart.render();
}

function total_aci_chart2() {

    var aa = parseFloat(document.getElementById('13A1').innerHTML);
    if (document.getElementById('13A1').innerHTML == ''){
        aa = 0;
    }
    var bb = parseFloat(document.getElementById('13A2').innerHTML);
    if (document.getElementById('13A2').innerHTML == ''){
        bb= 0;
    }
    var cc = parseFloat(document.getElementById('13A3').innerHTML);
    if (document.getElementById('13A3').innerHTML == ''){
        cc = 0;
    }
    // var dd = parseFloat(document.getElementById('13A4').innerHTML);
    // if (document.getElementById('13A4').innerHTML == ''){
    //     dd = 0;
    // }
    var ee = parseFloat(document.getElementById('13A5').innerHTML);
    if (document.getElementById('13A5').innerHTML == ''){
        ee = 0;
    }
    var ff = parseFloat(document.getElementById('13A6').innerHTML);
    if (document.getElementById('13A6').innerHTML == ''){
        ff = 0;
    }
    var gg = parseFloat(document.getElementById('13A7').innerHTML);
    if (document.getElementById('13A7').innerHTML == ''){
        gg = 0;
    }
    var hh = parseFloat(document.getElementById('13A8').innerHTML);
    if (document.getElementById('13A8').innerHTML == ''){
        hh = 0;
    }
    var chart = new CanvasJS.Chart("Total_aci_2", {
        animationEnabled: true,
        title:{
            text: 'ACI for Power Plants (kgCO2/kWhr)',
            fontFamily: "sans-serif",
            fontSize: 22,
        },
        width: 750,
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            dataPoints: [
                { y: aa, label: "AZN1" },
                { y: bb, label: "AZS" },
                { y: cc, label: "Subbiya" },
                // { y: dd, label: "Shuwaikh" },
                { y: ee, label: "Sh_North" },
                { y: ff, label: "Sh_South" },
                { y: gg, label: "Doha East" },
                { y: hh, label: "Doha West" }
            ]
        }]
    });
    chart.render();
}
$(document).ready(function () {
    $('#show_aci').click(function () {
        total_aci_chart1();
        total_aci_chart2();
    })
})

function total_his_chart2() {

    var chart = new CanvasJS.Chart("his_chart2", {
        animationEnabled: true,
        title:{
            text: 'CO2 Production in Kuwait: a Timeline (MtCO2)',
            fontFamily: "sans-serif",
            fontSize: 22,
        },
        width: 750,
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            dataPoints: [
                { y: 14.1, label: "1971" },
                { y: 15.1, label: "1975" },
                { y: 26.4, label: "1980" },
                { y: 36.7, label: "1985" },
                { y: 27.8, label: "1990" },
                { y: 32.3, label: "1995" },
                { y: 46.3, label: "2000" },
                { y: 64.7, label: "2005" },
                { y: 77, label: "2010" },
                { y: 79, label: "2014" },
                { y: 85.4, label: "2015" }
            ]
        }]
    });
    chart.render();
}


$(document).ready(function () {
    for (var pom = 1; pom <= 12; pom++){
        for (var dom = 1; dom <= 8; dom++){
            $('#'+pom+'P'+dom).keyup(function () {

                total_power_calc2();
                total_power_calc1();


            })
        }
    }
})

function total_power_calc1() {
    for (var pom = 1; pom <= 9; pom++){
        var toto = 0;
        for (var dom = 1; dom <= 12; dom++){
            if (document.getElementById(dom+'P'+pom).value == ''){
                toto += 0;
            }
            else{
                toto += parseFloat(document.getElementById(dom+'P'+pom).value);
            }
        }
        document.getElementById('13P'+pom).value = toto;
    }
}

function total_power_calc2() {
    for (var pom = 1; pom <= 12; pom++){
        var toto = 0;
        for (var dom = 1; dom <= 8; dom++){
            if (document.getElementById(pom+'P'+dom).value == ''){
                toto += 0;
            }
            else{
                toto += parseFloat(document.getElementById(pom+'P'+dom).value);
            }
        }
        document.getElementById(pom+'P9').value = toto;
    }
}

function average_aci() {
    for (var iom = 1; iom <= 8; iom++){
        var totoo = 0;
        for (var jom = 1; jom <= 12; jom++){
            if (document.getElementById(jom+'A'+iom).innerText == ''){
                totoo += 0;
            }
            else{
                totoo += parseFloat(document.getElementById(jom+'A'+iom).innerText);
            }
        }
        document.getElementById('14A'+iom).innerText = (totoo / 12).toFixed(2);
    }
}

$(document).ready(function () {
    Highcharts.chart('fuel_cons_chart1', {
        chart: {
            type: 'column',
            width: 750,
        },
        title: {
            text: "Total Fuel Consumption Values for Kuwait's Energy Sector in 2017 (Mtoe)",
        },
        xAxis: {
            categories: ['AZN1', 'AZS', 'Subbiya', 'Shuwaikh', 'Shuaiba North', 'Shuaiba South', 'Doha East', 'Doha West']
        },
        yAxis: {
            min: 0,
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        exporting: {
            enabled: false
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'HP+LNG',
            data: [parseFloat($('#1m1').text()), parseFloat($('#1m2').text()), parseFloat($('#1m3').text()), parseFloat($('#1m4').text()), parseFloat($('#1m5').text()), parseFloat($('#1m6').text()), parseFloat($('#1m7').text()), parseFloat($('#1m8').text())]
        }, {
            name: 'Gas Oil',
            data: [parseFloat($('#2m1').text()), parseFloat($('#2m2').text()), parseFloat($('#2m3').text()), parseFloat($('#2m4').text()), parseFloat($('#2m5').text()), parseFloat($('#2m6').text()), parseFloat($('#2m7').text()), parseFloat($('#2m8').text())]
        }, {
            name: 'HFO',
            data: [parseFloat($('#3m1').text()), parseFloat($('#3m2').text()), parseFloat($('#3m3').text()), parseFloat($('#3m4').text()), parseFloat($('#3m5').text()), parseFloat($('#3m6').text()), parseFloat($('#3m7').text()), parseFloat($('#3m8').text())]
        },{
            name: 'Crude Oil',
            data: [parseFloat($('#4m1').text()), parseFloat($('#4m2').text()), parseFloat($('#4m3').text()), parseFloat($('#4m4').text()), parseFloat($('#4m5').text()), parseFloat($('#4m6').text()), parseFloat($('#4m7').text()), parseFloat($('#4m8').text())]
        },{
            name: 'LP',
            data: [parseFloat($('#5m1').text()), parseFloat($('#5m2').text()), parseFloat($('#5m3').text()), parseFloat($('#5m4').text()), parseFloat($('#5m5').text()), parseFloat($('#5m6').text()), parseFloat($('#5m7').text()), parseFloat($('#5m8').text())]
        }]
    });

    var idd = 'fuel_cons_chart2';
    var ww1 = parseFloat($('#1m9').text());
    var ww2 = parseFloat($('#2m9').text());
    var ww3 = parseFloat($('#3m9').text());
    var ww4 = parseFloat($('#4m9').text());
    var ww5 = parseFloat($('#5m9').text());

    var cc1 = ((ww1 / (ww1 + ww2 + ww3 + ww4 + ww5))*100).toFixed(2);
    var cc2 = ((ww2 / (ww1 + ww2 + ww3 + ww4 + ww5))*100).toFixed(2);
    var cc3 = ((ww3 / (ww1 + ww2 + ww3 + ww4 + ww5))*100).toFixed(2);
    var cc4 = ((ww4 / (ww1 + ww2 + ww3 + ww4 + ww5))*100).toFixed(2);
    var cc5 = 100-cc1-cc2-cc3-cc4;

    var nw1 = 'HP+LNG';
    var nw2 = 'Gas Oil';
    var nw3 = 'HFO';
    var nw4 = 'Crude Oil';
    var nw5 = 'LP';

    var nt = "Total Fuel Consumption Profile for Kuwait's Energy Sector in 2017 (Mtoe)";
    chart_statu1(idd, nt, cc1, cc2, cc3, cc4, cc5, nw1, nw2, nw3, nw4, nw5);
    total_his_chart2();
})

$(document).ready(function () {
    $('#co2_calculate').click(function () {

        var FO1 = parseFloat(document.getElementById('1FQ').value) * 1129.98 * 0.05306 / 1000000;
        var FO2 = parseFloat(document.getElementById('2FQ').value) * 0.07492 * 5.731666667 / 1000000;
        var FO3 = parseFloat(document.getElementById('3FQ').value) * 0.07293 * 6.003083333 / 1000000;
        var FO4 = parseFloat(document.getElementById('4FQ').value) * 0.07454 * 6.0828 / 1000000;

        document.getElementById('FQ1').innerHTML = FO1.toFixed(5);
        document.getElementById('FQ2').innerHTML = FO2.toFixed(5);
        document.getElementById('FQ3').innerHTML = FO3.toFixed(5);
        document.getElementById('FQ4').innerHTML = FO4.toFixed(5);
        document.getElementById('FQ5').innerHTML = (FO4 + FO1 + FO2 + FO3).toFixed(5)
    })
})

$(document).ready(function () {
    $('#TPQ').keyup(function () {
        var rom = $('#FQ5').text();
        var uom = $('#TPQ').val();
        var hom = (parseFloat(rom) / parseFloat(uom)).toFixed(5);
        document.getElementById('TAO').innerHTML = hom;
    })
})
