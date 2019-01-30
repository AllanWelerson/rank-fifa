import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InitialsService {

  initials:any = [
    { "initials": "AD", "team": "Andorra" },
    { "initials": "AE", "team": "United Arab Emirates" },
    { "initials": "AF", "team": "Afghanistan" },
    { "initials": "AG", "team": "Antigua and Barbuda" },
    { "initials": "AI", "team": "Anguilla" },
    { "initials": "AL", "team": "Albania" },
    { "initials": "AM", "team": "Armenia" },
    { "initials": "AN", "team": "Netherlands Antilles" },
    { "initials": "AO", "team": "Angola" },
    { "initials": "AQ", "team": "Antarctica" },
    { "initials": "AR", "team": "Argentina" },
    { "initials": "AS", "team": "American Samoa" },
    { "initials": "AT", "team": "Austria" },
    { "initials": "AU", "team": "Australia" },
    { "initials": "AW", "team": "Aruba" },
    { "initials": "AX", "team": "Åland Islands" },
    { "initials": "AZ", "team": "Azerbaijan" },
    { "initials": "BA", "team": "Bosnia and Herzegovina" },
    { "initials": "BB", "team": "Barbados" },
    { "initials": "BD", "team": "Bangladesh" },
    { "initials": "BE", "team": "Belgium" },
    { "initials": "BF", "team": "Burkina Faso" },
    { "initials": "BG", "team": "Bulgaria" },
    { "initials": "BH", "team": "Bahrain" },
    { "initials": "BI", "team": "Burundi" },
    { "initials": "BJ", "team": "Benin" },
    { "initials": "BL", "team": "Saint Barthélemy" },
    { "initials": "BM", "team": "Bermuda" },
    { "initials": "BN", "team": "Brunei Darussalam" },
    { "initials": "BO", "team": "Bolivia" },
    { "initials": "BQ", "team": "Bonaire, Sint Eustatius and Saba" },
    { "initials": "BR", "team": "Brazil" },
    { "initials": "BS", "team": "Bahamas" },
    { "initials": "BT", "team": "Bhutan" },
    { "initials": "BV", "team": "Bouvet Island" },
    { "initials": "BW", "team": "Botswana" },
    { "initials": "BY", "team": "Belarus" },
    { "initials": "BZ", "team": "Belize" },
    { "initials": "CA", "team": "Canada" },
    { "initials": "", "team": "Curacao" },
    { "initials": "CC", "team": "Cocos (Keeling) Islands" },
    { "initials": "CD", "team": "Congo DR" },
    { "initials": "CF", "team": "Central African Republic" },
    { "initials": "CG", "team": "Congo" },
    { "initials": "CH", "team": "Switzerland" },
    { "initials": "CI", "team": "Côte d'Ivoire" },
    { "initials": "CK", "team": "Cook Islands" },
    { "initials": "CL", "team": "Chile" },
    { "initials": "CM", "team": "Cameroon" },
    { "initials": "CN", "team": "China PR" },
    { "initials": "CO", "team": "Colombia" },
    { "initials": "CR", "team": "Costa Rica" },
    { "initials": "CU", "team": "Cuba" },
    { "initials": "CV", "team": "Cape Verde Islands" },
    { "initials": "CW", "team": "Curaçao" },
    { "initials": "CX", "team": "Christmas Island" },
    { "initials": "CY", "team": "Cyprus" },
    { "initials": "CZ", "team": "Czech Republic" },
    { "initials": "DE", "team": "Germany" },
    { "initials": "DJ", "team": "Djibouti" },
    { "initials": "DK", "team": "Denmark" },
    { "initials": "DM", "team": "Dominica" },
    { "initials": "DO", "team": "Dominican Republic" },
    { "initials": "DZ", "team": "Algeria" },
    { "initials": "EC", "team": "Ecuador" },
    { "initials": "EE", "team": "Estonia" },
    { "initials": "EG", "team": "Egypt" },
    { "initials": "EH", "team": "Western Sahara" },
    { "initials": "ER", "team": "Eritrea" },
    { "initials": "ES", "team": "Spain" },
    { "initials": "ET", "team": "Ethiopia" },
    { "initials": "US", "team": "USA" },
    { "initials": "FI", "team": "Finland" },
    { "initials": "FJ", "team": "Fiji" },
    { "initials": "FK", "team": "Falkland Islands (Malvinas)" },
    { "initials": "FM", "team": "Micronesia, Federated States Of" },
    { "initials": "FO", "team": "Faroe Islands" },
    { "initials": "FR", "team": "France" },
    { "initials": "GA", "team": "Gabon" },
    { "initials": "GB", "team": "England" },
    { "initials": "GD", "team": "Grenada" },
    { "initials": "GE", "team": "Georgia" },
    { "initials": "GF", "team": "French Guiana" },
    { "initials": "GG", "team": "Guernsey" },
    { "initials": "GH", "team": "Ghana" },
    { "initials": "GI", "team": "Gibraltar" },
    { "initials": "GL", "team": "Greenland" },
    { "initials": "GM", "team": "Gambia" },
    { "initials": "GN", "team": "Guinea" },
    { "initials": "GP", "team": "Guadeloupe" },
    { "initials": "GQ", "team": "Equatorial Guinea" },
    { "initials": "GR", "team": "Greece" },
    { "initials": "GS", "team": "South Georgia and the South Sandwich Islands" },
    { "initials": "GT", "team": "Guatemala" },
    { "initials": "GU", "team": "Guam" },
    { "initials": "GW", "team": "Guinea-Bissau" },
    { "initials": "GY", "team": "Guyana" },
    { "initials": "HK", "team": "Hong Kong" },
    { "initials": "", "team": "Kosovo" },
    { "initials": "HM", "team": "Heard and McDonald Islands" },
    { "initials": "HN", "team": "Honduras" },
    { "initials": "HR", "team": "Croatia" },
    { "initials": "HT", "team": "Haiti" },
    { "initials": "HU", "team": "Hungary" },
    { "initials": "IC", "team": "" },
    { "initials": "ID", "team": "Indonesia" },
    { "initials": "IE", "team": "Republic of Ireland" },
    { "initials": "IL", "team": "Israel" },
    { "initials": "IM", "team": "Isle of Man" },
    { "initials": "IN", "team": "India" },
    { "initials": "IO", "team": "British Indian Ocean Territory" },
    { "initials": "IQ", "team": "Iraq" },
    { "initials": "IR", "team": "IR Iran" },
    { "initials": "IS", "team": "Iceland" },
    { "initials": "", "team": "Scotland" },
    { "initials": "IT", "team": "Italy" },
    { "initials": "JE", "team": "Jersey" },
    { "initials": "JM", "team": "Jamaica" },
    { "initials": "JO", "team": "Jordan" },
    { "initials": "JP", "team": "Japan" },
    { "initials": "KE", "team": "Kenya" },
    { "initials": "KG", "team": "Kyrgyz Republic" },
    { "initials": "KH", "team": "Cambodia" },
    { "initials": "KI", "team": "Kiribati" },
    { "initials": "KM", "team": "Comoros" },
    { "initials": "KN", "team": "St. Kitts and Nevis" },
    { "initials": "KP", "team": "Korea DPR" },
    { "initials": "KR", "team": "Korea Republic" },
    { "initials": "KW", "team": "Kuwait" },
    { "initials": "KY", "team": "Cayman Islands" },
    { "initials": "KZ", "team": "Kazakhstan" },
    { "initials": "LA", "team": "Lao People's Democratic Republic" },
    { "initials": "LB", "team": "Lebanon" },
    { "initials": "LC", "team": "St. Lucia" },
    { "initials": "LI", "team": "Liechtenstein" },
    { "initials": "LK", "team": "Sri Lanka" },
    { "initials": "LR", "team": "Liberia" },
    { "initials": "LS", "team": "Lesotho" },
    { "initials": "", "team": "Chinese Taipei" },
    { "initials": "LT", "team": "Lithuania" },
    { "initials": "LU", "team": "Luxembourg" },
    { "initials": "LV", "team": "Latvia" },
    { "initials": "LY", "team": "Libya" },
    { "initials": "MA", "team": "Morocco" },
    { "initials": "MC", "team": "Monaco" },
    { "initials": "MD", "team": "Moldova" },
    { "initials": "ME", "team": "Montenegro" },
    { "initials": "MF", "team": "Saint Martin" },
    { "initials": "MG", "team": "Madagascar" },
    { "initials": "MH", "team": "Marshall Islands" },
    { "initials": "MK", "team": "FYR Macedonia" },
    { "initials": "ML", "team": "Mali" },
    { "initials": "MM", "team": "Myanmar" },
    { "initials": "MN", "team": "Mongolia" },
    { "initials": "MO", "team": "Macao" },
    { "initials": "MP", "team": "Northern Mariana Islands" },
    { "initials": "", "team": "Northern Ireland" },
    { "initials": "MQ", "team": "Martinique" },
    { "initials": "MR", "team": "Mauritania" },
    { "initials": "MS", "team": "Montserrat" },
    { "initials": "MT", "team": "Malta" },
    { "initials": "", "team": "Macau" },
    { "initials": "", "team": "Laos" },
    { "initials": "MU", "team": "Mauritius" },
    { "initials": "", "team": "Tahiti" },
    { "initials": "MV", "team": "Maldives" },
    { "initials": "MW", "team": "Malawi" },
    { "initials": "MX", "team": "Mexico" },
    { "initials": "MY", "team": "Malaysia" },
    { "initials": "MZ", "team": "Mozambique" },
    { "initials": "NA", "team": "Namibia" },
    { "initials": "NC", "team": "New Caledonia" },
    { "initials": "NE", "team": "Niger" },
    { "initials": "NF", "team": "Norfolk Island" },
    { "initials": "NG", "team": "Nigeria" },
    { "initials": "NI", "team": "Nicaragua" },
    { "initials": "NL", "team": "Netherlands" },
    { "initials": "NO", "team": "Norway" },
    { "initials": "NP", "team": "Nepal" },
    { "initials": "NR", "team": "Nauru" },
    { "initials": "NU", "team": "Niue" },
    { "initials": "NZ", "team": "New Zealand" },
    { "initials": "OM", "team": "Oman" },
    { "initials": "PA", "team": "Panama" },
    { "initials": "PE", "team": "Peru" },
    { "initials": "PF", "team": "French Polynesia" },
    { "initials": "PG", "team": "Papua New Guinea" },
    { "initials": "PH", "team": "Philippines" },
    { "initials": "PK", "team": "Pakistan" },
    { "initials": "PL", "team": "Poland" },
    { "initials": "PM", "team": "Saint Pierre And Miquelon" },
    { "initials": "PN", "team": "Pitcairn" },
    { "initials": "PR", "team": "Puerto Rico" },
    { "initials": "PS", "team": "Palestine" },
    { "initials": "PT", "team": "Portugal" },
    { "initials": "PW", "team": "Palau" },
    { "initials": "PY", "team": "Paraguay" },
    { "initials": "QA", "team": "Qatar" },
    { "initials": "RE", "team": "Réunion" },
    { "initials": "RO", "team": "Romania" },
    { "initials": "RS", "team": "Serbia" },
    { "initials": "RU", "team": "Russia" },
    { "initials": "RW", "team": "Rwanda" },
    { "initials": "SA", "team": "Saudi Arabia" },
    { "initials": "SB", "team": "Solomon Islands" },
    { "initials": "SC", "team": "Seychelles" },
    { "initials": "SD", "team": "Sudan" },
    { "initials": "SE", "team": "Sweden" },
    { "initials": "SG", "team": "Singapore" },
    { "initials": "SH", "team": "Saint Helena" },
    { "initials": "SI", "team": "Slovenia" },
    { "initials": "SJ", "team": "Svalbard And Jan Mayen" },
    { "initials": "SK", "team": "Slovakia" },
    { "initials": "SL", "team": "Sierra Leone" },
    { "initials": "SM", "team": "San Marino" },
    { "initials": "SN", "team": "Senegal" },
    { "initials": "SO", "team": "Somalia" },
    { "initials": "SR", "team": "Suriname" },
    { "initials": "SS", "team": "South Sudan" },
    { "initials": "ST", "team": "Sao Tome e Principe" },
    { "initials": "SV", "team": "El Salvador" },
    { "initials": "SX", "team": "Sint Maarten" },
    { "initials": "SY", "team": "Syria" },
    { "initials": "SZ", "team": "Swaziland" },
    { "initials": "TC", "team": "Turks and Caicos Islands" },
    { "initials": "TD", "team": "Chad" },
    { "initials": "TF", "team": "French Southern Territories" },
    { "initials": "TG", "team": "Togo" },
    { "initials": "TH", "team": "Thailand" },
    { "initials": "TJ", "team": "Tajikistan" },
    { "initials": "TK", "team": "Tokelau" },
    { "initials": "TL", "team": "Timor-Leste" },
    { "initials": "TM", "team": "Turkmenistan" },
    { "initials": "TN", "team": "Tunisia" },
    { "initials": "TO", "team": "Tonga" },
    { "initials": "TR", "team": "Turkey" },
    { "initials": "TT", "team": "Trinidad and Tobago" },
    { "initials": "TV", "team": "Tuvalu" },
    { "initials": "TW", "team": "Taiwan" },
    { "initials": "TZ", "team": "Tanzania" },
    { "initials": "UA", "team": "Ukraine" },
    { "initials": "UG", "team": "Uganda" },
    { "initials": "UM", "team": "United States Minor Outlying Islands" },
    { "initials": "US", "team": "United States" },
    { "initials": "UY", "team": "Uruguay" },
    { "initials": "UZ", "team": "Uzbekistan" },
    { "initials": "VA", "team": "Holy See (Vatican City State)" },
    { "initials": "VC", "team": "St. Vincent / Grenadines" },
    { "initials": "VE", "team": "Venezuela" },
    { "initials": "VG", "team": "British Virgin Islands" },
    { "initials": "VI", "team": "US Virgin Islands" },
    { "initials": "VN", "team": "Vietnam" },
    { "initials": "VU", "team": "Vanuatu" },
    { "initials": "",   "team": "Wales"  },
    { "initials": "WF", "team": "Wallis and Futuna" },
    { "initials": "WS", "team": "Samoa" },
    { "initials": "XK", "team": "" },
    { "initials": "YE", "team": "Yemen" },
    { "initials": "YT", "team": "Mayotte" },
    { "initials": "ZA", "team": "South Africa" },
    { "initials": "ZM", "team": "Zambia" },
    { "initials": "ZW", "team": "Zimbabwe" },
    { "initials": "", "team": "" }
  ];



  constructor() { }

  public getInitials(name: String){
    const data =  this.initials.filter(data => data.team == name );
    return  data[0].initials;
  }

}
