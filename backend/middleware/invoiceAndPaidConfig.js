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
                //  initialisation des nombres de nuitées
                let count_night_off = new Array();

                let count_night_in_wd_low_saison = new Array();
                let count_night_out_wd_low_saison = new Array();
                let count_night_in_wd_middle_saison = new Array();
                let count_night_out_wd_middle_saison = new Array();
                let count_night_in_wd_hight_saison = new Array();
                let count_night_out_wd_hight_saison = new Array();

                count_night_off.push(0)
                count_night_in_wd_low_saison.push(0)
                count_night_out_wd_low_saison.push(0)
                count_night_in_wd_middle_saison.push(0)
                count_night_out_wd_middle_saison.push(0)
                count_night_in_wd_hight_saison.push(0)
                count_night_out_wd_hight_saison.push(0)

                Date.prototype.addDays = function(days) {
                    var dat = new Date(this.valueOf())
                    dat.setDate(dat.getDate() + days);
                    // console.log(dat)
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
                    // logique de comptage des jours feriés
                    if  (form_date_night_off.includes(get_day_off_one)
                    || form_date_night_off.includes(get_day_off_two) 
                    || form_date_night_off.includes(get_day_off_three) 
                    || form_date_night_off.includes(get_day_off_four) 
                    || form_date_night_off.includes(get_day_off_five)){
                        count_night_off[0] = count_night_off[0] + 1;
                    }
                }
                
                for(const date_reservation of dateArray){
                    let wd_or_no_wd = new Date(date_reservation).getDay();
                    let what_saison = new Date(date_reservation).getMonth();     
                    // switch sur les jours dans le tableau des dates reservation   
                    switch (JSON.stringify(wd_or_no_wd)){
                        case '0':
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                            // definition des dates de saison pour le comptage
                            let reg_num_low_saison = new RegExp('^[10, 11, 0, 1]$');
                            let reg_num_middle_saison = new RegExp('^[2, 3, 4, 5, 8, 9]$');
                            let reg_num_hight_saison = new RegExp('^[6, 7]$');
                            let low_saison = JSON.stringify(what_saison)
                            let middle_saison = JSON.stringify(what_saison)
                            let hight_saison = JSON.stringify(what_saison)

                            // verification du mois pour connaitre le groupe saisonnier
                            if(low_saison.match(reg_num_low_saison)) {
                                count_night_out_wd_low_saison[0] = count_night_out_wd_low_saison[0] + 1
                                // console.log(count_night_out_wd_low_saison[0])
                            }
                            if(middle_saison.match(reg_num_middle_saison)) {
                                count_night_out_wd_middle_saison[0] = count_night_out_wd_middle_saison[0] + 1
                                // console.log(count_night_out_wd_middle_saison[0])
                            }
                            if(hight_saison.match(reg_num_hight_saison)) {
                                count_night_out_wd_hight_saison[0] = count_night_out_wd_hight_saison[0] + 1
                                // console.log(count_night_out_wd_hight_saison[0])
                            }
                            break;
                        case '5':
                        case '6':
                            // definition des dates de saison pour le comptage
                            let reg_num_low_saison_two = new RegExp('^[10, 11, 0, 1]$');
                            let reg_num_middle_saison_two = new RegExp('^[2, 3, 4, 5, 8, 9]$');
                            let reg_num_hight_saison_two = new RegExp('^[6, 7]$');
                            let low_saison_two = JSON.stringify(what_saison)
                            let middle_saison_two = JSON.stringify(what_saison)
                            let hight_saison_two = JSON.stringify(what_saison)

                            // verification du mois pour connaitre le groupe saisonnier
                            if(low_saison_two.match(reg_num_low_saison_two)) {
                                count_night_in_wd_low_saison[0] = count_night_in_wd_low_saison[0] + 1
                                // console.log(count_night_in_wd_low_saison[0])
                            }
                            if(middle_saison_two.match(reg_num_middle_saison_two)) {
                                count_night_in_wd_middle_saison[0] = count_night_in_wd_middle_saison[0] + 1
                                // console.log(count_night_in_wd_middle_saison[0])
                            }
                            if(hight_saison_two.match(reg_num_hight_saison_two)) {
                                count_night_in_wd_hight_saison[0] = count_night_in_wd_hight_saison[0] + 1
                                // console.log(count_night_in_wd_hight_saison[0])
                            }
                            //   console.log(wd_or_no_wd);
                          break;
                        default:
                            break
                        ;
                    }
                      
                }  

                // mise en place de la base de donnée pour les calculs
                // total night
                let total_night_off = new Array();
                let total_night_in_wd_low_saison = new Array();
                let total_night_out_wd_low_saison = new Array();
                let total_night_in_wd_middle_saison = new Array();
                let total_night_out_wd_middle_saison = new Array();
                let total_night_in_wd_hight_saison = new Array();
                let total_night_out_wd_hight_saison = new Array();

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

                
                // recuperation des taux et valeurs changeantes
                // total jours férier
                total_night_off.push(count_night_off[0]);    
                // total nuit en wd basse saison          
                total_night_in_wd_low_saison.push(count_night_in_wd_low_saison[0]);
                // total nuit en wd basse saison  
                total_night_out_wd_low_saison.push(count_night_out_wd_low_saison[0]);
                // total nuit en wd basse saison  
                total_night_in_wd_middle_saison.push(count_night_in_wd_middle_saison[0]);
                // total nuit en wd basse saison  
                total_night_out_wd_middle_saison.push(count_night_out_wd_middle_saison[0]);
                // total nuit en wd basse saison  
                total_night_in_wd_hight_saison.push(count_night_in_wd_hight_saison[0]);
                // total nuit en wd basse saison  
                total_night_out_wd_hight_saison.push(count_night_out_wd_hight_saison[0]);
                // total nuit en wd basse saison  
                let nbPeople = req.body.nbPeople;
                let nbAdult = req.body.nbAdult;
                let nbChild = req.body.nbChild;

           
                
               console.log(total_night_off[0])
               console.log(total_night_in_wd_low_saison[0])
               console.log(total_night_out_wd_low_saison[0])
               console.log(total_night_in_wd_middle_saison[0])
               console.log(total_night_out_wd_middle_saison[0])
               console.log(total_night_in_wd_hight_saison[0])
               console.log(total_night_out_wd_hight_saison[0])
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
