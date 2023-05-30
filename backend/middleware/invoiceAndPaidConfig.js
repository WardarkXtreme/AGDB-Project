const { resolve } = require('path');
const dbConnect = require('../connect/Connect_db');
const model_invoice = require('../models/invoice_post');
const { setTimeout } = require('timers/promises');
const { count } = require('console');
require('dotenv').config();
const stripe = require('stripe')(`${process.env.TEST_CODE}`);

// body[0].user_id = 0;
// body[0].link_invoice = "";
// body[0].name = req.body.name;
// body[0].lastName = req.body.lastName;
// body[0].email = req.body.email;
// body[0].nationality = req.body.nationality;
// body[0].address = req.body.address;
// body[0].state = req.body.state;
// body[0].country = req.body.country;
// body[0].postalCode = req.body.postalCode;
// //---- Date d'arrivée et départ
// body[0].dateStart = req.body.dateStart;
// body[0].dateEnd = req.body.dateEnd;
// //---- Comptage de personnes
// body[0].nbPeople = nbPeople;
// body[0].nbAdult = nbAdult;
// body[0].nbChild = nbChild;
// //---- Total nombre de nuitées 
// body[0].total_nb_night = total_night;
// body[0].total_nb_night_off = total_night_off[0];
// body[0].total_nb_night_no_wd_low_saison = total_night_out_wd_low_saison[0];
// body[0].total_nb_night_wd_low_saison = total_night_in_wd_low_saison[0];
// body[0].total_nb_night_no_wd_middle_saison = total_night_out_wd_middle_saison[0];
// body[0].total_nb_night_wd_middle_saison = total_night_in_wd_middle_saison[0];
// body[0].total_nb_night_no_wd_hight_saison = total_night_out_wd_hight_saison[0];
// body[0].total_nb_night_wd_hight_saison = total_night_in_wd_hight_saison[0];
// //---- Info UNITé TTC tarif
// body[0].info_tarif_night_off = price_night_of_celebration;
// body[0].info_tarif_night_no_wd_low_saison = price_night_low_saison_out_wd;
// body[0].info_tarif_night_wd_low_saison = price_night_low_saison_in_wd;
// body[0].info_tarif_night_no_wd_middle_saison = price_night_middle_saison_out_wd;
// body[0].info_tarif_night_wd_middle_saison = price_night_middle_saison_in_wd;
// body[0].info_tarif_night_no_wd_hight_saison = price_night_hight_saison_out_wd;
// body[0].info_tarif_night_wd_hight_saison = price_night_hight_saison_in_wd;
// //---- Info UNITé HT tarif
// body[0].info_tarif_night_off_ht = calcul_night_off_u_ht;
// body[0].info_tarif_night_no_wd_low_saison_ht = calcul_price_night_out_wd_low_saison_ht_u;
// body[0].info_tarif_night_wd_low_saison_ht = calcul_price_night_in_wd_low_saison_ht_u;
// body[0].info_tarif_night_no_wd_middle_saison_ht = calcul_price_night_out_wd_middle_saison_ht_u;
// body[0].info_tarif_night_wd_middle_saison_ht = calcul_price_night_in_wd_middle_saison_ht_u;
// body[0].info_tarif_night_no_wd_hight_saison_ht = calcul_price_night_out_wd_hight_saison_ht_u;
// body[0].info_tarif_night_wd_hight_saison_ht = calcul_price_night_in_wd_hight_saison_ht_u;
// //---- Info Groupe TTC tarif
// body[0].price_night_off_ttc = calcul_night_off;
// body[0].price_night_no_wd_low_saison_ttc = calcul_price_night_out_wd_low_saison;
// body[0].price_night_wd_low_saison_ttc = calcul_price_night_in_wd_low_saison;
// body[0].price_night_wd_middle_saison_ttc = calcul_price_night_in_wd_middle_saison;
// body[0].price_night_no_wd_middle_saison_ttc = calcul_price_night_out_wd_middle_saison;
// body[0].price_night_no_wd_hight_saison_ttc = calcul_price_night_out_wd_hight_saison;
// body[0].price_night_wd_hight_saison_ttc = calcul_price_night_in_wd_hight_saison;
// body[0].price_taxe_by_night_by_adult_ttc = calcul_taxe_by_night_by_adult;
// body[0].price_service_taxe_value_ttc = 0;
// body[0].price_reservation_taxe_value_ttc = 0;
// //---- Info Groupe HT tarif
// body[0].price_night_off_ht = calcul_night_off_ht;
// body[0].price_night_no_wd_low_saison_ht = calcul_price_night_out_wd_low_saison_ht;
// body[0].price_night_wd_low_saison_ht = calcul_price_night_in_wd_low_saison_ht;
// body[0].price_night_wd_middle_saison_ht = calcul_price_night_in_wd_middle_saison_ht;
// body[0].price_night_no_wd_middle_saison_ht = calcul_price_night_out_wd_middle_saison_ht;
// body[0].price_night_no_wd_hight_saison_ht = calcul_price_night_out_wd_hight_saison_ht;
// body[0].price_night_wd_hight_saison_ht = calcul_price_night_in_wd_hight_saison_ht;
// body[0].price_service_taxe_value_ht = 0;
// body[0].price_reservation_taxe_value_ht = 0;
// //---- Montant des taxes
// body[0].additionnal_price_taxe_night_off = price_taxe_night_off;
// body[0].additionnal_price_night_no_wd_low_saison = price_taxe_nowd_low;
// body[0].additionnal_price_night_wd_low_saison = price_taxe_wd_low;
// body[0].additionnal_price_night_no_wd_middle_saison = price_taxe_nowd_middle;
// body[0].additionnal_price_night_wd_middle_saison = price_taxe_wd_middle;
// body[0].additionnal_price_night_no_wd_hight_saison = price_taxe_nowd_hight;
// body[0].additionnal_price_night_wd_hight_saison = price_taxe_wd_hight;
// body[0].additionnal_price_service_taxe_value = 0;
// body[0].additionnal_price_reservation_taxe_value = 0;


// body[0].service_taxe_value = 0;
// body[0].reservation_taxe_value = 0;

// body[0].priceServiceTaxeValueTTC = 0;
// body[0].priceLocationTaxeValueHT = 0;
// body[0].priceLocationTaxeValueTTC = 0;

// body[0].specialDiscountValue = 0;

// body[0].totalHTBeforeSpecialDiscount = 0;
// body[0].totalHTAfterSpecialDiscount = 0;
// body[0].totalTTCBeforeSpecialDiscount = 0;
// body[0].totalTTCAfterSpecialDiscount = 0;

// body[0].totalHT = parseInt(calcul_total_ht);
// body[0].total_ttc = parseInt(calcul_total_ttc);
// body[0];
// **********************************************************


module.exports = (req, res, next) => {

    date_array_reservation = new Array();
    date_night_off = new Array();
    date_saison_low = new Array();
    date_saison_middle = new Array();
    date_saison_hight = new Array();

    Date.prototype.addDays = function (days) {
        var dat = new Date(this.valueOf())
        dat.setDate(dat.getDate() + days);
        // console.log(dat)
        return dat;
    }

    function getDates(startDate, stopDate) {
        var dateArray = new Array();
        var currentDate = startDate.addDays(-1);
        while (currentDate < stopDate) {
            currentDate = currentDate.addDays(1);
            dateArray.push(currentDate)
        }
        return dateArray;
    }

    let sql = `SELECT * FROM augiteduboisv2.table_fixed_price_and_fixed_taxe`;
    dbConnect.query(sql, function (err, data) {
        if (err) {
            console.log(err)
        }
        // console.log(data)
        let totalDays = date_array_reservation.length;
        let totalNight = totalDays - 1;

        const test = new Promise((resolve, reject) => {



            const date_array_reservation = getDates(new Date(req.body.dateStart), (new Date(req.body.dateEnd)));

            if (date_array_reservation != undefined) {
                resolve([{
                    "date_array_reservation": date_array_reservation,
                    "taxe_by_adult_by_night": data[0].taxe_by_adult_by_night,
                    "taxe_service": data[0].taxe_service,
                    "taxe_location": data[0].taxe_location,
                    "taxe_by_adult_by_night": data[0].taxe_by_adult_by_night,
                    "price_night_low_saison_out_wd": data[0].price_night_low_saison_out_wd,
                    "price_night_low_saison_in_wd": data[0].price_night_low_saison_in_wd,
                    "price_night_middle_saison_out_wd": data[0].price_night_middle_saison_out_wd,
                    "price_night_middle_saison_in_wd": data[0].price_night_middle_saison_in_wd,
                    "price_night_hight_saison_out_wd": data[0].price_night_hight_saison_out_wd,
                    "price_night_hight_saison_in_wd": data[0].price_night_hight_saison_in_wd,
                    "price_night_of_celebration": data[0].price_night_of_celebration,

                }])
                console.log(data)

            } else {
                reject("oops")
            }
        })
        test.then((data) => {

            let count_night_off = 0;
            let count_night_in_wd_low_saison = 0;
            let count_night_in_wd_middle_saison = 0;
            let count_night_in_wd_hight_saison = 0;
            let count_night_out_wd_low_saison = 0;
            let count_night_out_wd_middle_saison = 0;
            let count_night_out_wd_hight_saison = 0;

            let date_off_one = Date.now()
            date_off_one = new Date(date_off_one).setMonth(0)
            date_off_one = new Date(date_off_one).setDate(1)
            date_off_one = new Date(date_off_one).toISOString().split('T')[0]
            let date_off_two = Date.now()
            date_off_two = new Date(date_off_two).setMonth(4)
            date_off_two = new Date(date_off_two).setDate(1)
            date_off_two = new Date(date_off_two).toISOString().split('T')[0]
            let date_off_three = Date.now()
            date_off_three = new Date(date_off_three).setMonth(4)
            date_off_three = new Date(date_off_three).setDate(8)
            date_off_three = new Date(date_off_three).toISOString().split('T')[0]
            let date_off_four = Date.now()
            date_off_four = new Date(date_off_four).setMonth(6)
            date_off_four = new Date(date_off_four).setDate(14)
            date_off_four = new Date(date_off_four).toISOString().split('T')[0]
            let date_off_five = Date.now()
            date_off_five = new Date(date_off_five).setMonth(7)
            date_off_five = new Date(date_off_five).setDate(15)
            date_off_five = new Date(date_off_five).toISOString().split('T')[0]
            let date_off_six = Date.now()
            date_off_six = new Date(date_off_six).setMonth(10)
            date_off_six = new Date(date_off_six).setDate(1)
            date_off_six = new Date(date_off_six).toISOString().split('T')[0]
            let date_off_seven = Date.now()
            date_off_seven = new Date(date_off_seven).setMonth(10)
            date_off_seven = new Date(date_off_seven).setDate(11)
            date_off_seven = new Date(date_off_seven).toISOString().split('T')[0]
            let date_off_height = Date.now()
            date_off_height = new Date(date_off_height).setMonth(11)
            date_off_height = new Date(date_off_height).setDate(25)
            date_off_height = new Date(date_off_height).toISOString().split('T')[0]

            data[0].date_array_reservation.forEach(date_reservation => {

                let recup_date = new Date(date_reservation).toISOString().split('T')[0]
                if (recup_date === date_off_one || recup_date === date_off_two || recup_date === date_off_three || recup_date === date_off_four || recup_date === date_off_five || recup_date === date_off_six || recup_date === date_off_seven || recup_date === date_off_height) {
                    // console.log(date_off_one, date_off_two, date_off_three)
                    count_night_off++
                    // console.log(count_night_off) 
                } else {
                    null
                }
                if (recup_date != date_off_one && recup_date != date_off_two && recup_date != date_off_three && recup_date != date_off_four && recup_date != date_off_five && recup_date != date_off_six && recup_date != date_off_seven && recup_date != date_off_height) {

                    let get_month = new Date(recup_date).getMonth()
                    let get_day = new Date(recup_date).getDay()
                    let low_saison = [10, 11, 0, 1];
                    let middle_saison = [2, 3, 4, 5, 8, 9];
                    let hight_saison = [6, 7];
                    let no_wd = [0, 1, 2, 3, 6];
                    let wd = [5, 4];

                    // &&&&&&&&&&&&&& LOW SAISON &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                    if (get_month === low_saison[0] || get_month === low_saison[1] || get_month === low_saison[2] || get_month === low_saison[3]) {
                        if (get_day === no_wd[0] || get_day === no_wd[1] || get_day === no_wd[2] || get_day === no_wd[3] || get_day === no_wd[4]) {
                            count_night_out_wd_low_saison++;
                        } else if (get_day === wd[0] || get_day === wd[1]) {
                            count_night_in_wd_low_saison++;
                            // console.log({ date: recup_date, day: get_day, month: get_month, info: "nous sommes en weekend !" })
                        } else { null }
                    } else {
                        null
                    }
                    // console.log()
                    // &&&&&&&&&&&&&& MIDDLE SAISON &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                    if (get_month === middle_saison[0] || get_month === middle_saison[1] || get_month === middle_saison[2] || get_month === middle_saison[3] || get_month === middle_saison[4] || get_month === middle_saison[5]) {
                        if (get_day === no_wd[0] || get_day === no_wd[1] || get_day === no_wd[2] || get_day === no_wd[3] || get_day === no_wd[4]) {
                            count_night_out_wd_middle_saison++;
                            // console.log({ date: recup_date, day: get_day, month: get_month, info: "nous sommes hors weekend !" })
                        } else if (get_day === wd[0] || get_day === wd[1]) {
                            count_night_in_wd_middle_saison++;
                            // console.log({ date: recup_date, day: get_day, month: get_month, info: "nous sommes en weekend !" })
                        } else { null }
                    } else {
                        null
                    }
                    // console.log()
                    // &&&&&&&&&&&&&& HIGHT SAISON &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                    if (get_month === hight_saison[0] || get_month === hight_saison[1]) {
                        if (get_day === no_wd[0] || get_day === no_wd[1] || get_day === no_wd[2] || get_day === no_wd[3] || get_day === no_wd[4]) {
                            count_night_out_wd_hight_saison++;
                            // console.log({ date: recup_date, day: get_day, month: get_month, info: "nous sommes hors weekend !" })
                        } else if (get_day === wd[0] || get_day === wd[1]) {
                            count_night_in_wd_hight_saison++;
                            // console.log({ date: recup_date, day: get_day, month: get_month, info: "nous sommes en weekend !" })
                        } else { null }
                    } else {
                        null
                    }
                } else {
                    null
                }
            });
            return ({
                count_total_night: data[0].date_array_reservation.length,
                taxe_by_adult_by_night: data[0].taxe_by_adult_by_night,
                count_night_off: count_night_off,
                count_night_out_wd_low_saison: count_night_out_wd_low_saison,
                count_night_in_wd_low_saison: count_night_in_wd_low_saison,
                count_night_out_wd_middle_saison: count_night_out_wd_middle_saison,
                count_night_in_wd_middle_saison: count_night_in_wd_middle_saison,
                count_night_out_wd_hight_saison: count_night_out_wd_hight_saison,
                count_night_in_wd_hight_saison: count_night_in_wd_hight_saison,
                taxe_service: data[0].taxe_service,
                taxe_location: data[0].taxe_location,
                taxe_by_adult_by_night: data[0].taxe_by_adult_by_night,
                price_night_low_saison_out_wd: data[0].price_night_low_saison_out_wd,
                price_night_low_saison_in_wd: data[0].price_night_low_saison_in_wd,
                price_night_middle_saison_out_wd: data[0].price_night_middle_saison_out_wd,
                price_night_middle_saison_in_wd: data[0].price_night_middle_saison_in_wd,
                price_night_hight_saison_out_wd: data[0].price_night_hight_saison_out_wd,
                price_night_hight_saison_in_wd: data[0].price_night_hight_saison_in_wd,
                price_night_of_celebration: data[0].price_night_of_celebration,
            })
        }).then((ready_for_calculated) => {
            console.log(ready_for_calculated)

            const body = [{

                date_init: new Date().toISOString().split("T")[0],
                user_id: "",
                link_invoice: "",

                numberInvoice: "",
                name: "",
                lastName: "",
                mobile: "",
                email: "",
                nationality: "",

                address: "",
                city: "",
                state: "",
                country: "",
                postalCode: "",

                dateStart: req.body.dateStart,
                dateEnd: req.body.dateEnd,

                nbPeople: Number(req.body.nbPeople),
                nbAdult: Number(req.body.nbAdult),
                nbChild: Number(req.body.nbChild),

                total_nb_night: ready_for_calculated.count_total_night,
                total_nb_night_off: ready_for_calculated.count_night_off,
                total_nb_night_no_wd_low_saison: ready_for_calculated.count_night_out_wd_low_saison,
                total_nb_night_wd_low_saison: ready_for_calculated.count_night_in_wd_low_saison,
                total_nb_night_no_wd_middle_saison: ready_for_calculated.count_night_out_wd_middle_saison,
                total_nb_night_wd_middle_saison: ready_for_calculated.count_night_in_wd_middle_saison,
                total_nb_night_no_wd_hight_saison: ready_for_calculated.count_night_out_wd_hight_saison,
                total_nb_night_wd_hight_saison: ready_for_calculated.count_night_in_wd_hight_saison,
                // info tariff unitaire ttc
                info_tarif_night_off: ready_for_calculated.price_night_of_celebration,
                info_tarif_night_no_wd_low_saison: ready_for_calculated.price_night_low_saison_out_wd,
                info_tarif_night_wd_low_saison: ready_for_calculated.price_night_low_saison_in_wd,
                info_tarif_night_no_wd_middle_saison: ready_for_calculated.price_night_middle_saison_out_wd,
                info_tarif_night_wd_middle_saison: ready_for_calculated.price_night_middle_saison_in_wd,
                info_tarif_night_no_wd_hight_saison: ready_for_calculated.price_night_hight_saison_out_wd,
                info_tarif_night_wd_hight_saison: ready_for_calculated.price_night_hight_saison_in_wd,

                // info tariff unitaire ht
                info_tarif_night_off_ht: ready_for_calculated.price_night_of_celebration - (ready_for_calculated.price_night_of_celebration * ready_for_calculated.taxe_location /100),
                info_tarif_night_no_wd_low_saison_ht: ready_for_calculated.price_night_low_saison_out_wd - (ready_for_calculated.price_night_low_saison_out_wd * ready_for_calculated.taxe_location /100),
                info_tarif_night_wd_low_saison_ht: ready_for_calculated.price_night_low_saison_in_wd - (ready_for_calculated.price_night_low_saison_in_wd * ready_for_calculated.taxe_location /100),
                info_tarif_night_no_wd_middle_saison_ht: ready_for_calculated.price_night_middle_saison_out_wd - (ready_for_calculated.price_night_middle_saison_out_wd * ready_for_calculated.taxe_location /100),
                info_tarif_night_wd_middle_saison_ht: ready_for_calculated.price_night_middle_saison_in_wd - (ready_for_calculated.price_night_middle_saison_in_wd * ready_for_calculated.taxe_location /100),
                info_tarif_night_no_wd_hight_saison_ht: ready_for_calculated.price_night_hight_saison_out_wd - (ready_for_calculated.price_night_hight_saison_out_wd * ready_for_calculated.taxe_location /100),
                info_tarif_night_wd_hight_saison_ht: ready_for_calculated.price_night_hight_saison_in_wd - (ready_for_calculated.price_night_hight_saison_in_wd * ready_for_calculated.taxe_location /100),
                //cout des taxes unitaire
                price_service_taxe: 0,
                price_taxe_u_night_off: ready_for_calculated.price_night_of_celebration - (ready_for_calculated.price_night_of_celebration - (ready_for_calculated.price_night_of_celebration * ready_for_calculated.taxe_location /100)) ,
                price_taxe_u_night_no_wd_low_saison_ht: ready_for_calculated.price_night_low_saison_out_wd - (ready_for_calculated.price_night_low_saison_out_wd - (ready_for_calculated.price_night_low_saison_out_wd * ready_for_calculated.taxe_location /100)) ,
                price_taxe_u_night__wd_low_saison_ht: ready_for_calculated.price_night_low_saison_in_wd - ( ready_for_calculated.price_night_low_saison_in_wd - (ready_for_calculated.price_night_low_saison_in_wd * ready_for_calculated.taxe_location /100)) ,
                price_taxe_u_nightnight_no_wd_middle_saison_ht: ready_for_calculated.price_night_middle_saison_in_wd - (ready_for_calculated.price_night_middle_saison_in_wd - (ready_for_calculated.price_night_middle_saison_in_wd * ready_for_calculated.taxe_location /100)) ,
                price_taxe_u_wd_middle_saison_ht: ready_for_calculated.price_night_middle_saison_in_wd - (ready_for_calculated.price_night_middle_saison_in_wd - (ready_for_calculated.price_night_middle_saison_in_wd * ready_for_calculated.taxe_location /100)) ,
                price_taxe_u_night_no_wd_hight_saison_ht: ready_for_calculated.price_night_hight_saison_out_wd - (ready_for_calculated.price_night_hight_saison_out_wd - (ready_for_calculated.price_night_hight_saison_out_wd * ready_for_calculated.taxe_location /100)) ,
                price_taxe_u_night_wd_hight_saison_ht: ready_for_calculated.price_night_hight_saison_in_wd - (ready_for_calculated.price_night_hight_saison_in_wd - (ready_for_calculated.price_night_hight_saison_in_wd * ready_for_calculated.taxe_location /100)) ,
                // prix Groupe TTC
                price_night_off_ttc: ready_for_calculated.count_night_off * ready_for_calculated.price_night_of_celebration,
                price_night_no_wd_low_saison_ttc: ready_for_calculated.price_night_low_saison_out_wd * ready_for_calculated.count_night_out_wd_low_saison,
                price_night_wd_low_saison_ttc: ready_for_calculated.price_night_low_saison_in_wd * ready_for_calculated.count_night_in_wd_low_saison,
                price_night_no_wd_middle_saison_ttc: ready_for_calculated.price_night_middle_saison_out_wd * ready_for_calculated.count_night_out_wd_middle_saison,
                price_night_wd_middle_saison_ttc: ready_for_calculated.price_night_middle_saison_in_wd * ready_for_calculated.count_night_in_wd_middle_saison,
                price_night_no_wd_middle_saison_ttc: ready_for_calculated.price_night_middle_saison_out_wd * ready_for_calculated.count_night_out_wd_hight_saison,
                price_night_wd_hight_saison_ttc: ready_for_calculated.price_night_hight_saison_in_wd * ready_for_calculated.count_night_in_wd_hight_saison,

               
                price_taxe_by_night_by_adult_ttc: (ready_for_calculated.taxe_by_adult_by_night * ready_for_calculated.count_total_night) * Number(req.body.nbAdult),
                
                // prix Groupe HT
                price_night_off_ht: ready_for_calculated.price_night_of_celebration * ready_for_calculated.count_night_off -((ready_for_calculated.price_night_of_celebration * ready_for_calculated.count_night_off) * ready_for_calculated.taxe_location/100),
                price_night_no_wd_low_saison_ht: ready_for_calculated.price_night_low_saison_out_wd * ready_for_calculated.count_night_out_wd_low_saison -((ready_for_calculated.price_night_low_saison_out_wd * ready_for_calculated.count_night_out_wd_low_saison) * ready_for_calculated.taxe_location /100 ),
                price_night_wd_low_saison_ht: ready_for_calculated.price_night_low_saison_in_wd * ready_for_calculated.count_night_in_wd_low_saison -((ready_for_calculated.price_night_low_saison_in_wd * ready_for_calculated.count_night_out_wd_low_saison) * ready_for_calculated.taxe_location /100 ),
                price_night_no_wd_middle_saison_ht: ready_for_calculated.price_night_middle_saison_out_wd * ready_for_calculated.count_night_out_wd_middle_saison -((ready_for_calculated.price_night_middle_saison_out_wd * ready_for_calculated.count_night_out_wd_middle_saison) * ready_for_calculated.taxe_location /100 ),
                price_night_wd_middle_saison_ht: ready_for_calculated.price_night_middle_saison_in_wd * ready_for_calculated.count_night_in_wd_middle_saison -((ready_for_calculated.price_night_middle_saison_in_wd * ready_for_calculated.count_night_in_wd_middle_saison) * ready_for_calculated.taxe_location /100 ),

                price_night_no_wd_hight_saison_ht: ready_for_calculated.price_night_hight_saison_out_wd * ready_for_calculated.count_night_out_wd_hight_saison -((ready_for_calculated.price_night_hight_saison_out_wd * ready_for_calculated.count_night_out_wd_hight_saison) * ready_for_calculated.taxe_location /100 ),
                price_night_wd_hight_saison_ht: ready_for_calculated.price_night_hight_saison_out_wd * ready_for_calculated.count_night_out_wd_hight_saison -((ready_for_calculated.price_night_hight_saison_out_wd * ready_for_calculated.count_night_out_wd_hight_saison) * ready_for_calculated.taxe_location /100 ),
                
                // coup des taxes groupées
                additionnal_price_taxe_night_off: (ready_for_calculated.count_night_off * ready_for_calculated.price_night_of_celebration) - (ready_for_calculated.price_night_of_celebration * ready_for_calculated.count_night_off -((ready_for_calculated.price_night_of_celebration * ready_for_calculated.count_night_off) * ready_for_calculated.taxe_location/100)),
                additionnal_price_night_no_wd_low_saison: (ready_for_calculated.price_night_low_saison_out_wd * ready_for_calculated.count_night_out_wd_low_saison) - (ready_for_calculated.price_night_low_saison_out_wd * ready_for_calculated.count_night_out_wd_low_saison -((ready_for_calculated.price_night_low_saison_out_wd * ready_for_calculated.count_night_out_wd_low_saison) * ready_for_calculated.taxe_location /100 )),
                additionnal_price_night_wd_low_saison: ( ready_for_calculated.price_night_low_saison_in_wd * ready_for_calculated.count_night_in_wd_low_saison) - (ready_for_calculated.price_night_low_saison_in_wd * ready_for_calculated.count_night_in_wd_low_saison -((ready_for_calculated.price_night_low_saison_in_wd * ready_for_calculated.count_night_out_wd_low_saison) * ready_for_calculated.taxe_location /100 )),
                additionnal_price_night_no_wd_middle_saison:( ready_for_calculated.price_night_middle_saison_out_wd * ready_for_calculated.count_night_out_wd_middle_saison) - (ready_for_calculated.price_night_middle_saison_out_wd * ready_for_calculated.count_night_out_wd_middle_saison -((ready_for_calculated.price_night_middle_saison_out_wd * ready_for_calculated.count_night_out_wd_middle_saison) * ready_for_calculated.taxe_location /100 )),
                additionnal_price_night_wd_middle_saison: (ready_for_calculated.price_night_middle_saison_in_wd * ready_for_calculated.count_night_in_wd_middle_saison) - (ready_for_calculated.price_night_middle_saison_in_wd * ready_for_calculated.count_night_in_wd_middle_saison -((ready_for_calculated.price_night_middle_saison_in_wd * ready_for_calculated.count_night_in_wd_middle_saison) * ready_for_calculated.taxe_location /100 )),

                additionnal_price_night_no_wd_hight_saison: ( ready_for_calculated.price_night_middle_saison_out_wd * ready_for_calculated.count_night_out_wd_hight_saison) - ( ready_for_calculated.price_night_hight_saison_out_wd * ready_for_calculated.count_night_out_wd_hight_saison -((ready_for_calculated.price_night_hight_saison_out_wd * ready_for_calculated.count_night_out_wd_hight_saison) * ready_for_calculated.taxe_location /100 )),
                additionnal_price_night_wd_hight_saison: (ready_for_calculated.price_night_hight_saison_in_wd * ready_for_calculated.count_night_in_wd_hight_saison) - (ready_for_calculated.price_night_hight_saison_out_wd * ready_for_calculated.count_night_out_wd_hight_saison -((ready_for_calculated.price_night_hight_saison_out_wd * ready_for_calculated.count_night_out_wd_hight_saison) * ready_for_calculated.taxe_location /100 )),

                additionnal_price_service_taxe_value: 0,
                additionnal_price_reservation_taxe_value: 0,

                additionnal_price_taxe_by_night_by_adult: ready_for_calculated.taxe_by_adult_by_night,

                service_taxe_value: 0,
                reservation_taxe_value: 0,

                priceServiceTaxeValueTTC: 0,
                priceLocationTaxeValueHT: 0,
                priceLocationTaxeValueTTC: 0,

                specialDiscountValue: 0,

                totalHTBeforeSpecialDiscount: 0,
                totalHTAfterSpecialDiscount: 0,
                totalTTCBeforeSpecialDiscount: 0,
                totalTTCAfterSpecialDiscount: 0,

                totalHT: 0,
                total_ttc: 0

            }]
            body;
            console.log(ready_for_calculated.price_night_of_celebration * ready_for_calculated.count_night_out_wd_middle_saison)
            console.log(body)
        }).catch((err) => {
            console.log(err)
        })
    })
    try {
        setTimeout(() => {
            next();
        }, 300);
    } catch (error) {
        return res.status(400).send(new Error('Bad request access get saison !!'));
    }
}