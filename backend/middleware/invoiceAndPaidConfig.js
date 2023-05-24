const dbConnect = require('../connect/Connect_db');
const model_invoice = require('../models/invoice_post');
require('dotenv').config();
const stripe = require('stripe')(`${process.env.TEST_CODE}`);



const body = [{
    date_init: "temp",
    user_id: "temp",
    link_invoice: "temp",    

    numberInvoice: "temp",
    name: "temp",    
    lastName: "temp",    
    mobile: "temp",    
    email: "temp",   
    nationality: "temp",    

    address: "temp",   
    city: "temp",    
    state: "temp",    
    country: "temp",    
    postalCode: "temp",    

    dateStart: "temp",
    dateEnd: "temp",

    nbPeople: "temp",
    nbAdult: "temp",
    nbChild: "temp",
    
    nbNightNoWD: "temp",
    nbNightWD: "temp",

    infoTarif: "temp",
    priceNightNoWD: "temp",
    priceNightWD: "temp",

    nightAdultTaxeValue: "temp",
    locationTaxeValue: "temp",
    serviceTaxeValue: "temp",

    priceNightAdultTaxe: "temp",
    priceServiceTaxe: "temp",
    priceLocationTaxe: "temp",

    priceServiceTaxeValueHT: "temp",
    priceServiceTaxeValueTTC: "temp",
    priceLocationTaxeValueHT: "temp",
    priceLocationTaxeValueTTC: "temp",

    
    specialDiscountValue: "temp",

    totalHTBeforeSpecialDiscount: "temp",
    totalHTAfterSpecialDiscount: "temp",
    totalTTCBeforeSpecialDiscount: "temp",
    totalTTCAfterSpecialDiscount: "temp",

    totalHT: "temp",
    total_ttc: "temp"        
             
}]

module.exports = (req, res, next) => {

    function getInfoTarif(err){
        let sql = `SELECT * FROM augiteduboisv2.table_fixed_price_and_fixed_taxe`;
        if (err) {
            return res.status(400).send(new Error('Bad request!'));
        } 
        dbConnect.query(sql, function (err, data) {
            if (err) {
                return res.status(400).send(new Error('Bad request!'));
            }    
            
            // console.log(data)
            let id = data[0].id;
            let test = req.body.nbNightNoWD;
            req.body.nbNightWD = data[0].id
            // console.log(id)
            // console.log(test)
            // console.log(req.body)


    
             // console.log(JSON.stringify(dateArray[0].toISOString().split("T")[0]))
             // recuperation des taux et valeurs changeantes
            //  console.log(req.body)
             let nbPeople = req.body.nbPeople
             let nbAdult = req.body.nbAdult
             let nbChild = req.body.nbChild
             let total_night_in_wd;
             let total_night_out_wd;
             let total_night_off;
             // recuperation des taux et valeurs fixes
             // taxe_service: 20,
             let taxe_service = data[0].taxe_service;
             // taxe_location: 10,
             let taxe_location = data[0].taxe_location;
             // taxe_by_adult_by_night: 165,
             let taxe_by_adult_by_night = data[0].taxe_by_adult_by_night;
             // price_night_low_saison_out_wd: 3300,
             let price_night_low_saison_out_wd = data[0].price_night_low_saison_out_wd;
             // price_night_low_saison_in_wd: 3900,
             let price_night_low_saison_in_wd = data[0].price_night_low_saison_in_wd;
             // price_night_middle_saison_out_wd: 4000,
             let price_night_middle_saison_out_wd = data[0].price_night_middle_saison_out_wd;
             // price_night_middle_saison_in_wd: 4500,
             let price_night_middle_saison_in_wd = data[0].price_night_middle_saison_in_wd;
             // price_night_hight_saison_out_wd: 4700,
             let price_night_hight_saison_out_wd = data[0].price_night_hight_saison_out_wd;
             // price_night_hight_saison_in_wd: 5350,
             let price_night_hight_saison_in_wd = data[0].price_night_hight_saison_in_wd;
             // price_night_of_celebration: 5350,
             let price_night_of_celebration = data[0].price_night_of_celebration;
             // *****Génération des jour feriés et tarif assosié
             let get_day_off_one = new Date();
             get_day_off_one.setMonth(0);
             get_day_off_one.setDate(1);
             get_day_off_one = new Date(get_day_off_one).toISOString().split("T")[0]
             // console.log(get_day_off_one);
             let get_day_off_two = new Date();
             get_day_off_two.setMonth(4);
             get_day_off_two.setDate(1);
             get_day_off_two = new Date(get_day_off_two).toISOString().split("T")[0]
             // console.log(get_day_off_two);
             let get_day_off_three = new Date();
             get_day_off_three.setMonth(4);
             get_day_off_three.setDate(8);
             get_day_off_three = new Date(get_day_off_three).toISOString().split("T")[0]
             // console.log(get_day_off_three);
             let get_day_off_four = new Date();
             get_day_off_four.setMonth(6);
             get_day_off_four.setDate(14);
             get_day_off_four = new Date(get_day_off_four).toISOString().split("T")[0]
             // console.log(get_day_off_four);
             let get_day_off_five = new Date();
             get_day_off_five.setMonth(10);
             get_day_off_five.setDate(11);
             get_day_off_five = new Date(get_day_off_five).toISOString().split("T")[0]
             // console.log(get_day_off_five);
             function calcul(){


                 // calcul
                let count_night_off = new Array();
                count_night_off.push(0)

                let count_night_in_wd = 0;
                let count_night_out_wd = 0;

                Date.prototype.addDays = function(days) {
                    var dat = new Date(this.valueOf())
                    dat.setDate(dat.getDate() + days);
                    console.log(dat)
                    return dat;
                }
             
                function getDates(startDate, stopDate) {
                    var dateArray = new Array();
                    var currentDate = startDate;
                    
                    while (currentDate < stopDate) {
                    currentDate = currentDate.addDays(1);
                    dateArray.push(currentDate)
                    }
                    return dateArray;
                }
                
                
                var dateArray = getDates(new Date(req.body.dateStart), (new Date(req.body.dateEnd)));    
                
                // boucle de calcul nombre de jour fériés
                for(const date of dateArray){
                    // formatage correcte des dates de jours feriés
                    let form_date_night_off = date.toISOString().split("T")[0]

                    if (form_date_night_off.includes(get_day_off_one)) {

                        count_night_off[0] = count_night_off[0] + 1
                        console.log(count_night_off[0])
                    }
                    if (form_date_night_off.includes(get_day_off_two)) {

                        count_night_off[0] = count_night_off[0] + 1
                        console.log(count_night_off[0])
                    }
                    if (form_date_night_off.includes(get_day_off_three)) {

                        count_night_off[0] = count_night_off[0] + 1
                        console.log(count_night_off[0])
                    }
                    if (form_date_night_off.includes(get_day_off_four)) {

                        count_night_off[0] = count_night_off[0] + 1
                        console.log(count_night_off[0])
                    }
                    if (form_date_night_off.includes(get_day_off_five)) {

                        count_night_off[0] = count_night_off[0] + 1
                        console.log(count_night_off[0])
                    }
                }

                // for(const date_reservation of dateArray){

                //     let test = date_reservation.getDay()
                //     if(test === 0 || test <=)
                    
                //     console.log(test)
                // }                

            } 
         calcul();
        //  console.log(total_night_off)
        })
    }
    try{
        getInfoTarif();
        next()
    }catch(error){
        return res.status(400).send(new Error('Bad request access get saison !!'));
    }
}  
