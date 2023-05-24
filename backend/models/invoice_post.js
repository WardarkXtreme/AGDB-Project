//***model facture
const ModelInvoice = function (invoice) {

    // info fac
    this.numberInvoiceInit = invoice.numberInvoiceInit;
    // identity
    this.user_id = invoice.user_id;
    this.price = invoice.price;
    this.link_invoice = invoice.link_invoice;
    this.date_init = invoice.date_init;



	this.name = invoice.name;
    this.lastName = invoice.lastName;
    this.mobile = invoice.mobile;
    this.email = invoice.email;
    this.nationality = invoice.nationality;

    this.address = invoice.address;
    this.city = invoice.city;
    this.state = invoice.state;
    this.country = invoice.country;
    this.postalCode = invoice.postalCode;

    // reservation
    this.dateStart = invoice.dateStart;
    this.dateEnd = invoice.dateEnd;

    this.infoTarif = invoice.infoTarif;
// 
    this.nbPeople = invoice.nbPeople;
    this.nbAdult = invoice.nbAdult;
    this.nbChild = invoice.nbChild;

    this.nbNightNoWD = invoice.nbNightNoWD;
    this.nbNightWD = invoice.nbNightWD;

    this.priceNightNoWD = invoice.priceNightNoWD;
    this.priceNightWD = invoice.priceNightWD;
    // valeur des taxe € ou %
    this.nightAdultTaxeValue = invoice.nightAdultTaxeValue;
    this.locationTaxeValue = invoice.locationTaxeValue;
    this.serviceTaxeValue = invoice.serviceTaxeValue;
    // 
    this.priceNightAdultTaxe = invoice.priceNightAdultTaxe;
    this.priceServiceTaxe = invoice.priceServiceTaxe;
    this.priceLocationTaxe = invoice.priceLocationTaxe;

    this.priceServiceTaxeValueHT = invoice.priceServiceTaxeValueHT;
    this.priceServiceTaxeValueTTC = invoice.priceServiceTaxeValueTTC;
    this.priceLocationTaxeValueHT = invoice.priceLocationTaxeValueHT;
    this.priceLocationTaxeValueTTC = invoice.priceLocationTaxeValueTTC;
    
    this.specialDiscountValue = invoice.specialDiscountValue;
    
    this.totalHTBeforeSpecialDiscount = invoice.totalHTBeforeSpecialDiscount;
    this.totalHTAfterSpecialDiscount = invoice.totalHTAfterSpecialDiscount;
    this.totalTTCBeforeSpecialDiscount = invoice.totalTTCBeforeSpecialDiscount;
    this.totalTTCAfterSpecialDiscount = invoice.totalTTCAfterSpecialDiscount;

    this.totalHT = invoice.totalHT;
    this.total_ttc = invoice.total_ttc;
};

module.exports = ModelInvoice;