const dbConnect = require('../connect/Connect_db');
const model_invoice = require('../models/invoice_post');
require('dotenv').config();
const stripe = require('stripe')(`${process.env.TEST_CODE}`);

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

    dateStart: "",
    dateEnd: "",

    nbPeople: "",
    nbAdult: "",
    nbChild: "",

    total_nb_night: 0,
    total_nb_night_off: 0,
    total_nb_night_no_wd_low_saison: 0,
    total_nb_night_wd_low_saison: 0,
    total_nb_night_no_wd_middle_saison: 0,
    total_nb_night_wd_middle_saison: 0,
    total_nb_night_no_wd_hight_saison: 0,
    total_nb_night_wd_hight_saison: 0,
    // info tariff unitaire ttc
    info_tarif_night_off: 0,
    info_tarif_night_no_wd_low_saison: 0,
    info_tarif_night_wd_low_saison: 0,
    info_tarif_night_no_wd_middle_saison: 0,
    info_tarif_night_wd_middle_saison: 0,
    info_tarif_night_no_wd_hight_saison: 0,
    info_tarif_night_wd_hight_saison: 0,

    // info tariff unitaire ht
    info_tarif_night_off_ht: 0,
    info_tarif_night_no_wd_low_saison_ht: 0,
    info_tarif_night_wd_low_saison_ht: 0,
    info_tarif_night_no_wd_middle_saison_ht: 0,
    info_tarif_night_wd_middle_saison_ht: 0,
    info_tarif_night_no_wd_hight_saison_ht: 0,
    info_tarif_night_wd_hight_saison_ht: 0,

    // prix Groupe TTC
    price_night_off_ttc: 0,
    price_night_no_wd_low_saison_ttc: 0,
    price_night_wd_low_saison_ttc: 0,
    price_night_no_wd_middle_saison_ttc: 0,
    price_night_wd_middle_saison_ttc: 0,
    price_night_no_wd_hight_saison_ttc: 0,
    price_night_wd_hight_saison_ttc: 0,
    price_taxe_by_night_by_adult_ttc: 0,
    price_service_taxe_value_ttc: 0,
    price_reservation_taxe_value_ttc: 0,
    
    // prix Groupe HT
    price_night_off_ht: 0,
    price_night_no_wd_low_saison_ht: 0,
    price_night_wd_low_saison_ht: 0,
    price_night_no_wd_middle_saison_ht: 0,
    price_night_wd_middle_saison_ht: 0,
    price_night_no_wd_hight_saison_ht: 0,
    price_night_wd_hight_saison_ht: 0,
    price_service_taxe_value_ht: 0,
    price_reservation_taxe_value_ht: 0,
    
    // Valeur des taxes
    additionnal_price_taxe_night_off: 0,
    additionnal_price_night_no_wd_low_saison: 0,
    additionnal_price_night_wd_low_saison: 0,
    additionnal_price_night_no_wd_middle_saison: 0,
    additionnal_price_night_wd_middle_saison: 0,
    additionnal_price_night_no_wd_hight_saison: 0,
    additionnal_price_night_wd_hight_saison: 0,
    additionnal_price_service_taxe_value: 0,
    additionnal_price_reservation_taxe_value: 0,
    
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
console.log(JSON.stringify(body[0].date_init))

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
            // let id = data[0].id;
            // let test = req.body.nbNightNoWD;
            // req.body.nbNightWD = data[0].id
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
                        count_night_off[0] = parseInt(count_night_off[0] + 1 );
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
                let total_night = dateArray.length -1;
                let total_night_off = new Array();
                let total_night_in_wd_low_saison = new Array();
                let total_night_out_wd_low_saison = new Array();
                let total_night_in_wd_middle_saison = new Array();
                let total_night_out_wd_middle_saison = new Array();
                let total_night_in_wd_hight_saison = new Array();
                let total_night_out_wd_hight_saison = new Array();
                
                // recuperation des taux et valeurs fixes
                // total des nuits
                // taxe_service: 20,
                let taxe_service = parseInt(data[0].taxe_service);
                // taxe_location: 10,
                let taxe_location = parseInt(data[0].taxe_location);
                // taxe_by_adult_by_night: 165,
                let taxe_by_adult_by_night = parseInt(data[0].taxe_by_adult_by_night);
                // price_night_low_saison_out_wd: 3300,
                let price_night_low_saison_out_wd = parseInt(data[0].price_night_low_saison_out_wd);
                // price_night_low_saison_in_wd: 3900,
                let price_night_low_saison_in_wd = parseInt(data[0].price_night_low_saison_in_wd);
                // price_night_middle_saison_out_wd: 4000,
                let price_night_middle_saison_out_wd = parseInt(data[0].price_night_middle_saison_out_wd);
                // price_night_middle_saison_in_wd: 4500,
                let price_night_middle_saison_in_wd = parseInt(data[0].price_night_middle_saison_in_wd);
                // price_night_hight_saison_out_wd: 4700,
                let price_night_hight_saison_out_wd = parseInt(data[0].price_night_hight_saison_out_wd);
                // price_night_hight_saison_in_wd: 5350,
                let price_night_hight_saison_in_wd = parseInt(data[0].price_night_hight_saison_in_wd);
                // price_night_of_celebration: 5350,
                let price_night_of_celebration = parseInt(data[0].price_night_of_celebration);
                
                // recuperation des taux et valeurs changeantes
                let nbPeople = req.body.nbPeople;
                let nbAdult = req.body.nbAdult;
                let nbChild = req.body.nbChild;

                
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
                
                
                
                //----------------********* CALCUL FOR INVOICE *************------------------
                // calculated taxeByNightByAdult
                let calcul_taxe_by_night_by_adult = parseInt(taxe_by_adult_by_night) * parseInt(req.body.nbAdult) * parseInt((total_night));
                // calcul pour nuit ferier
                let calcul_night_off = parseInt(total_night_off) * parseInt(price_night_of_celebration);
                let calcul_night_off_ht = parseInt(calcul_night_off) - (parseInt(calcul_night_off) * parseInt(taxe_location) /100) ;
                let calcul_night_off_u_ht = parseInt(price_night_of_celebration) - (parseInt(price_night_of_celebration) * parseInt(taxe_location) /100);
                let price_taxe_night_off = parseInt(calcul_night_off) - calcul_night_off_u_ht;
                // calcul pour nuit en weekend basse saison
                let calcul_price_night_in_wd_low_saison = parseInt(total_night_in_wd_low_saison) * parseInt(price_night_low_saison_in_wd);
                let calcul_price_night_in_wd_low_saison_ht = parseInt(calcul_price_night_in_wd_low_saison) - (parseInt(calcul_price_night_in_wd_low_saison) * parseInt(taxe_location) /100) ;
                let calcul_price_night_in_wd_low_saison_ht_u = parseInt(price_night_low_saison_in_wd) - (parseInt(price_night_low_saison_in_wd) * parseInt(taxe_location) /100);
                let price_taxe_wd_low =  calcul_price_night_in_wd_low_saison - calcul_price_night_in_wd_low_saison_ht;
                // calcul pour nuit hors weekend basse saison
                let calcul_price_night_out_wd_low_saison = parseInt(price_night_low_saison_out_wd) * parseInt(total_night_out_wd_low_saison);
                let calcul_price_night_out_wd_low_saison_ht = parseInt(calcul_price_night_out_wd_low_saison) - (parseInt(calcul_price_night_out_wd_low_saison) * parseInt(taxe_location) /100) ;
                let calcul_price_night_out_wd_low_saison_ht_u = parseInt(calcul_price_night_out_wd_low_saison_ht) / parseInt(total_night);
                let price_taxe_nowd_low =  calcul_price_night_out_wd_low_saison - calcul_price_night_out_wd_low_saison_ht;
                // calcul pour nuit en weekend moyenne saison
                let calcul_price_night_in_wd_middle_saison = parseInt(price_night_middle_saison_in_wd) * parseInt(total_night_in_wd_low_saison);
                let calcul_price_night_in_wd_middle_saison_ht = parseInt(calcul_price_night_in_wd_middle_saison) - (parseInt(calcul_price_night_in_wd_middle_saison) * parseInt(taxe_location) /100) ;
                let calcul_price_night_in_wd_middle_saison_ht_u = parseInt(calcul_price_night_in_wd_middle_saison_ht) / parseInt(total_night);
                let price_taxe_wd_middle =  calcul_price_night_in_wd_middle_saison - calcul_price_night_in_wd_middle_saison_ht;
                // calcul pour nuit hors weekend moyenne saison
                let calcul_price_night_out_wd_middle_saison = parseInt(price_night_middle_saison_in_wd) * parseInt(total_night_in_wd_low_saison);
                let calcul_price_night_out_wd_middle_saison_ht = parseInt(calcul_price_night_out_wd_middle_saison) - (parseInt(calcul_price_night_out_wd_middle_saison) * parseInt(taxe_location) /100) ;
                let calcul_price_night_out_wd_middle_saison_ht_u = parseInt(calcul_price_night_out_wd_middle_saison_ht) / parseInt(total_night);
                let price_taxe_nowd_middle =  calcul_price_night_out_wd_middle_saison - calcul_price_night_out_wd_middle_saison_ht;
                // calcul pour nuit en weekend haute saison
                let calcul_price_night_in_wd_hight_saison = parseInt(price_night_hight_saison_in_wd) * parseInt(total_night_in_wd_low_saison);
                let calcul_price_night_in_wd_hight_saison_ht = parseInt(calcul_price_night_in_wd_hight_saison) - (parseInt(calcul_price_night_in_wd_hight_saison) * parseInt(taxe_location) /100) ;
                let calcul_price_night_in_wd_hight_saison_ht_u = parseInt(calcul_price_night_in_wd_hight_saison_ht) / parseInt(total_night);
                let price_taxe_wd_hight =  calcul_price_night_in_wd_hight_saison - calcul_price_night_in_wd_hight_saison_ht;
                // calcul pour nuit hors weekend haute saison
                let calcul_price_night_out_wd_hight_saison = parseInt(price_night_hight_saison_out_wd) * parseInt(total_night_out_wd_hight_saison);
                let calcul_price_night_out_wd_hight_saison_ht = parseInt(calcul_price_night_out_wd_low_saison) - (parseInt(calcul_price_night_out_wd_hight_saison) * parseInt(taxe_location) /100) ;
                let calcul_price_night_out_wd_hight_saison_ht_u = parseInt(calcul_price_night_out_wd_hight_saison_ht) / parseInt(total_night);
                let price_taxe_nowd_hight =  calcul_price_night_out_wd_hight_saison - calcul_price_night_out_wd_hight_saison_ht;
                // calcul pour TOTAL
                
                
                let calcul_total = calcul_night_off + calcul_price_night_in_wd_low_saison + calcul_price_night_out_wd_low_saison + calcul_price_night_in_wd_middle_saison + calcul_price_night_out_wd_middle_saison + calcul_price_night_in_wd_hight_saison + calcul_price_night_out_wd_hight_saison ;
                let calcul_total_ttc = calcul_total + calcul_taxe_by_night_by_adult
                let calcul_total_ht = parseInt(calcul_total) - (parseInt(calcul_total) * parseInt(taxe_location) /100);
                
                
                
                
                //----------------********* RECONSTRUCTION DE [BODY]*************------------------
                //---- Info
                body[0].user_id = 0;
                body[0].link_invoice = "";
                body[0].name = req.body.name;
                body[0].lastName = req.body.lastName;
                body[0].email = req.body.email;
                body[0].nationality = req.body.nationality;
                body[0].address = req.body.address;
                body[0].state = req.body.state;
                body[0].country = req.body.country;
                body[0].postalCode = req.body.postalCode;
                //---- Date d'arrivée et départ
                body[0].dateStart = req.body.dateStart;
                body[0].dateEnd = req.body.dateEnd;
                //---- Comptage de personnes
                body[0].nbPeople = req.body.nbPeople;
                body[0].nbAdult = req.body.nbAdult;
                body[0].nbChild = req.body.nbChild;
                //---- Total nombre de nuitées 
                body[0].total_nb_night = total_night;
                body[0].total_nb_night_off = total_night_off[0];
                body[0].total_nb_night_no_wd_low_saison = total_night_out_wd_low_saison[0]; 
                body[0].total_nb_night_wd_low_saison = total_night_in_wd_low_saison[0]; 
                body[0].total_nb_night_no_wd_middle_saison = total_night_out_wd_middle_saison[0]; 
                body[0].total_nb_night_wd_middle_saison = total_night_in_wd_middle_saison[0];
                body[0].total_nb_night_no_wd_hight_saison = total_night_out_wd_hight_saison[0];   
                body[0].total_nb_night_wd_hight_saison = total_night_in_wd_hight_saison[0];
                //---- Info UNITé TTC tarif
                body[0].info_tarif_night_off = price_night_of_celebration;
                body[0].info_tarif_night_no_wd_low_saison = price_night_low_saison_out_wd;
                body[0].info_tarif_night_wd_low_saison = price_night_low_saison_in_wd;
                body[0].info_tarif_night_no_wd_middle_saison = price_night_middle_saison_out_wd;
                body[0].info_tarif_night_wd_middle_saison = price_night_middle_saison_in_wd;
                body[0].info_tarif_night_no_wd_hight_saison = price_night_hight_saison_out_wd;
                body[0].info_tarif_night_wd_hight_saison = price_night_hight_saison_in_wd;
                //---- Info UNITé HT tarif
                body[0].info_tarif_night_off_ht = calcul_night_off_u_ht;
                body[0].info_tarif_night_no_wd_low_saison_ht = calcul_price_night_out_wd_low_saison_ht_u;
                body[0].info_tarif_night_wd_low_saison_ht = calcul_price_night_in_wd_low_saison_ht_u;
                body[0].info_tarif_night_no_wd_middle_saison_ht = calcul_price_night_out_wd_middle_saison_ht_u;
                body[0].info_tarif_night_wd_middle_saison_ht = calcul_price_night_in_wd_middle_saison_ht_u;
                body[0].info_tarif_night_no_wd_hight_saison_ht = calcul_price_night_out_wd_hight_saison_ht_u;
                body[0].info_tarif_night_wd_hight_saison_ht = calcul_price_night_in_wd_hight_saison_ht_u;
                //---- Info Groupe TTC tarif
                body[0].price_night_off_ttc = calcul_night_off;
                body[0].price_night_no_wd_low_saison_ttc = calcul_price_night_out_wd_low_saison;
                body[0].price_night_wd_low_saison_ttc = calcul_price_night_in_wd_low_saison;
                body[0].price_night_wd_middle_saison_ttc = calcul_price_night_in_wd_middle_saison;
                body[0].price_night_no_wd_middle_saison_ttc = calcul_price_night_out_wd_middle_saison;
                body[0].price_night_no_wd_hight_saison_ttc = calcul_price_night_out_wd_hight_saison;
                body[0].price_night_wd_hight_saison_ttc = calcul_price_night_in_wd_hight_saison;
                body[0].price_taxe_by_night_by_adult_ttc = calcul_taxe_by_night_by_adult;
                body[0].price_service_taxe_value_ttc = 0;
                body[0].price_reservation_taxe_value_ttc = 0;
                //---- Info Groupe HT tarif
                body[0].price_night_off_ht = calcul_night_off_ht;
                body[0].price_night_no_wd_low_saison_ht = calcul_price_night_out_wd_low_saison_ht;
                body[0].price_night_wd_low_saison_ht = calcul_price_night_in_wd_low_saison_ht;
                body[0].price_night_wd_middle_saison_ht = calcul_price_night_in_wd_middle_saison_ht;
                body[0].price_night_no_wd_middle_saison_ht = calcul_price_night_out_wd_middle_saison_ht;
                body[0].price_night_no_wd_hight_saison_ht = calcul_price_night_out_wd_hight_saison_ht;
                body[0].price_night_wd_hight_saison_ht = calcul_price_night_in_wd_hight_saison_ht;
                body[0].price_service_taxe_value_ht = 0;
                body[0].price_reservation_taxe_value_ht = 0;
                //---- Montant des taxes
                body[0].additionnal_price_taxe_night_off = price_taxe_night_off;
                body[0].additionnal_price_night_no_wd_low_saison = price_taxe_nowd_low;
                body[0].additionnal_price_night_wd_low_saison = price_taxe_wd_low;
                body[0].additionnal_price_night_no_wd_middle_saison = price_taxe_nowd_middle;
                body[0].additionnal_price_night_wd_middle_saison = price_taxe_wd_middle;
                body[0].additionnal_price_night_no_wd_hight_saison = price_taxe_nowd_hight;
                body[0].additionnal_price_night_wd_hight_saison = price_taxe_wd_hight;
                body[0].additionnal_price_service_taxe_value = 0;
                body[0].additionnal_price_reservation_taxe_value = 0;
                
                
                body[0].service_taxe_value = 0;
                body[0].reservation_taxe_value = 0;
                
                body[0].priceServiceTaxeValueTTC = 0;
                body[0].priceLocationTaxeValueHT = 0;
                body[0].priceLocationTaxeValueTTC = 0;
                
                body[0].specialDiscountValue = 0;
                
                body[0].totalHTBeforeSpecialDiscount = 0;
                body[0].totalHTAfterSpecialDiscount = 0;
                body[0].totalTTCBeforeSpecialDiscount = 0;
                body[0].totalTTCAfterSpecialDiscount = 0;
                
                body[0].totalHT = parseInt(calcul_total_ht);
                body[0].total_ttc = parseInt(calcul_total_ttc);
                
                
                console.log(parseInt(calcul_total_ttc))
                console.log(parseInt(calcul_total_ht))
                
                // calcul pour 
                // console.log()
                // console.log()
                console.log(...body)
                // console.log(...body)

                // body[0].
                
                
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
