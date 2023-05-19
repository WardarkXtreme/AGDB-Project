const ModelInvoice = function (invoice) {
    this.numberInvoiceInit = invoice.numberInvoiceInit;
    this.invoiceInit = invoice.invoiceInit;
	this.name = invoice.name;
    this.lastName = invoice.lastName;
    this.mobile = invoice.mobile;
    this.email = invoice.email;
    this.address = invoice.address;
    this.city = invoice.city;
    this.state = invoice.state;
    this.country = invoice.country;
    this.postalCode = invoice.postalCode;

    this.dateStart = invoice.dateStart;
    this.dateEnd = invoice.dateEnd;

    this.nbPeople = invoice.nbPeople;
    this.nbAdult = invoice.nbAdult;
    this.nbChild = invoice.nbChild;

    this.nbNightNoWD = invoice.nbNightNoWD;
    this.nbNightWD = invoice.nbNightWD;

    this.priceNightNoWD = invoice.priceNightNoWD;
    this.priceNightWD = invoice.priceNightWD;

    this.nightAdultTaxeValue = invoice.nightAdultTaxeValue;
    this.locationTaxeValue = invoice.locationTaxeValue;
    this.serviceTaxeValue = invoice.serviceTaxeValue;

    this.priceServiceTaxeValueHT = invoice.priceServiceTaxeValueHT;
    this.priceServiceTaxeValueTTC = invoice.priceServiceTaxeValueTTC;
    this.priceServiceTaxe = invoice.priceServiceTaxe;

    this.priceLocationTaxeValueHT = invoice.priceLocationTaxeValueHT;
    this.priceLocationTaxeValueTTC = invoice.priceLocationTaxeValueTTC;
    this.priceLocationTaxe = invoice.priceLocationTaxe;

    this.totalHT = invoice.totalHT;
    this.totalTTC = invoice.totalTTC;

    this.specialDiscountValue = invoice.specialDiscountValue;
    this.totalTTCBeforeSpecialDiscount = invoice.totalBeforeSpecialDiscount;
    this.totalTTCAfterSpecialDiscount = invoice.totalAfterSpecialDiscount;
};

module.exports = ModelInvoice;