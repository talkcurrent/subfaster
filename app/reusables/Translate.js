import { I18n } from 'i18n-js';

const Translate = (words, lang) => {

    const i18n = new I18n({
        en: {
            register: 'Open an account',
            login: 'Sign in',
            "sign up": 'Sign up',
            "remember me": 'Remember me',
            "slidertextone": 'So you don’t run out of sub, subFaster can handle your daily, weekly or monthly subscription for you',
            "slidertexttwo": 'subFaster for all region, choose your best language and enjoy the best subscription app available',
            "first name": 'First name',
            "last name": 'Last name',
            "other name": 'Other name',
            "full name": 'Full name',
            "phone number": 'Phone number',
            "e-mail": 'E-mail',
            "address": 'Address',
            "data": 'Data',
            "data size": 'Data size',
            "amount": 'Amount',
            "secret pin": 'Transaction PIN',
            "store or business name": 'Store or Business name',
            "store type": 'Store type',
            "country": 'Country',
            "state": 'State',
            "city": 'City',
            "area": 'Area',
            "currency": 'Currency',
            "password": 'Password',
            "forgot password": 'Forgot password',
            "get new password": 'Get new password',
            "i have read the": 'I have read the',
            "terms and conditions": 'terms and conditions',
            "already have an account?": 'Already have an account?',
            "optional": 'Optional',
            "please": 'please',
            "wait": 'wait',
            "daily": 'Daily',
            "weekly": 'Weekly',
            "monthly": 'Monthly',
            "monday": 'Monday',
            "tuesday": 'Tuesday',
            "wednesday": 'Wednesday',
            "thursday": 'Thursday',
            "friday": 'Friday',
            "saturday": 'Saturday',
            "sunday": 'Sunday',
            "schedule": 'Schedule',
            "automate this transaction": 'Automate this transaction',
            "your 4-digit pin": 'Your 4-digit pin',
            "buy": 'Buy',
            "prefered day of the month": "Prefered day of the month",
            "prefered day of the week": "Prefered day of the week",
            "buy and subscribe": "Buy and subscribe",
            "buy data or airtime": 'Buy Data or Airtime?',
            'meter type': 'Meter type',
            'meter number': 'Meter number',
            'customer id': 'Customer ID',
            'account type': 'Account Type',
            'pay': 'Pay',
            'transaction pin': 'Transaction PIN',
        },
        fa: {
            "register": "enregistrer",
            "buy data or airtime": "Acheter des données ou du temps d'antenne?",
            "login": "connexion",
            "sign up": "s'inscrire",
            "remember me": "souviens-toi de moi",
            "slidertextone": "Un magasin organisé vous permet de vous occuper plus rapidement de votre client",
            "slidertexttwo": "ShopRecords vous permet de garder un œil sur votre magasin partout où vous allez",
            "first name": "prénom",
            "last name": "nom de famille",
            "other name": "autre nom",
            "full name": 'Nom et prénom',
            "phone number": "numéro de téléphone",
            "e-mail": "e-mail",
            "address": 'Adresse',
            "data": 'Données',
            "airtime": "temps d'antenne",
            "data size": 'Taille des données',
            "amount": 'Combien',
            "secret pin": "Code PIN de transaction",
            "store or business name": "nom du magasin ou de l'entreprise",
            "store type": "type de magasin",
            "country": "pays",
            "state": "État",
            "city": "ville",
            "area": "zone",
            "currency": "monnaie",
            "password": "mot de passe",
            "forgot password": "Mot de passe oublié",
            "get new password": "Obtenir un nouveau mot de passe",
            "i have read the": "j'ai lu le",
            "terms and conditions": "termes et conditions",
            "already have an account?": "Vous avez déjà un compte?",
            "optional": 'Pas obligatoire',
            "please": 's\'il te plaît',
            "wait": 'attendez',
            "daily": 'Tous les jours',
            "weekly": 'Hebdomadaire',
            "monthly": 'Mensuelle',
            "Monday": 'Lundi',
            "Tuesday": 'Mardi',
            "Wednesday": 'Mercredi',
            "Thursday": 'Jeudi',
            "Friday": 'Vendredi',
            "Saturday": 'Samedi',
            "Sunday": 'Dimanche',
            "schedule": 'Calendrier',
            "automate this transaction": 'Automatisez cette transaction',
            "your 4-digit pin": 'Votre code PIN à 4 chiffres',
            "buy": "Acheter",
            "prefered day of the month": "Jour du mois préféré",
            "prefered day of the week": "Jour de la semaine préféré",
            "buy and subscribe": "Acheter et s'abonner",
            'meter type': 'Type de compteur',
            'meter number': 'Numéro de compteur',
            'customer id': "N ° de client",
            'account type': "Type de compte",
            'pay': 'Payer',
            'transaction pin': 'épingle de transaction',
        },
        ar: {
            "register": "يسجل",
            "login": "تسجيل الدخول",
            "sign up": "اشتراك",
            "remember me": "تذكرنى",
            "slidertextone": "يسمح لك المتجر المنظم بالحضور إلى عميلك بشكل أسرع",
            "slidertexttwo": "تسمح لك سجلات المتاجر بمراقبة متجرك في كل مكان تذهب إليه ",
            "first name": "الاسم الأول",
            "last name": "اسم العائلة",
            "other name": "اسم آخر",
            "full name": 'الاسم الكامل',
            "phone number": "رقم التليفون",
            "e-mail": "بريد إلكتروني",
            "address": 'عنوان',
            "data size": 'حجم البيانات',
            "airtime": "وقت البث",
            "data": "بيانات",
            "amount": 'كم ثمن',
            "secret pin": "PIN الصفقة",
            "store or business name": "اسم المتجر أو العمل",
            "store type": "نوع المتجر",
            "country": "دولة",
            "state": "ولاية",
            "city": "مدينة",
            "area": "منطقة",
            "currency": "عملة",
            "password": "كلمة المرور",
            "forgot password": "هل نسيت كلمة السر",
            "get new password": "احصل على كلمة سر جديدة",
            "i have read the": "لقد قرأت ال",
            "terms and conditions": "الأحكام والشروط",
            "already have an account?": "هل لديك حساب؟",
            "optional": 'ليس إلزاميا',
            "please": 'لو سمحت',
            "wait": 'انتظر',
            "daily": 'يوميًا',
            "weekly": 'أسبوعي',
            "monthly": 'شهريا',
            "monday": 'الاثنين',
            "tuesday": 'يوم الثلاثاء',
            "wednesday": 'الأربعاء',
            "thursday": 'يوم الخميس',
            "friday": 'جمعة',
            "saturday": 'السبت',
            "sunday": 'الأحد',
            "schedule": 'جدول',
            "automate this transaction": "أتمتة هذه الصفقة",
            "your 4-digit pin": 'رقمك السري المكون من 4 أرقام',
            "buy": "يشتري",
            "prefered day of the month": "اليوم المفضل من الشهر",
            "prefered day of the week": "اليوم المفضل في الأسبوع",
            "buy and subscribe": "شراء والاشتراك",
            "buy data or airtime": 'شراء البيانات أو البث؟',
            'meter type': 'نوع العداد',
            'meter number': "متر",
            'customer id': "هوية الزبون",
            'account type': "نوع الحساب",
            'pay': 'يدفع',
            'transaction pin': 'PIN الصفقة',
        },
        ha: {
            register: 'Rajista',
            login: 'Shiga',
            "remember me": 'tuna ni',
            "sign up": 'Yi rajista',
            "slidertextone": 'Shagon da aka tsara yana ba ku damar halartar abokin cinikin ku da sauri',
            "slidertexttwo": 'ShopRecords yana ba ku damar sanya ido kan kantin sayar da ku a duk inda kuka je',
            "first name": 'Sunan rana',
            "last name": 'sunan mahaifa',
            "other name": 'Sunan tsakiya',
            "full name": 'Cikakken suna',
            "phone number": 'Lambar tarho',
            "e-mail": 'Imel',
            "address": 'Adireshi',
            "data size": 'Girman data ',
            "data": 'Data ',
            "airtime": 'Airtime ',
            "amount": 'Nawa?',
            "secret pin": 'PIN na kasuwanci',
            "store or business name": 'Sunan Kasuwanci',
            "store type": 'Nau\'in kantin',
            "country": 'Ƙasa, ƙasa',
            "state": 'Jihar, bayyana, furta',
            "city": 'Birni, gari',
            "area": 'Yanki, wuri',
            "password": 'Kalmar sirri',
            "forgot password": 'Manta kalmar sirri',
            "get new password": 'Samo sabon kalmar sirri',
            "currency": 'Kudin waje, kuɗi',
            "i have read the": 'Na karanta',
            "terms and conditions": 'sharuɗɗan da sharuddan',
            "already have an account?": 'Kuna da asusu?',
            "optional": 'ba dole ba',
            "please": 'Don Allah',
            "wait": 'jira',
            "daily": 'Kullum',
            "weekly": 'Mako-mako',
            "monthly": 'Kowane wata',
            "monday": 'Litinin',
            "tuesday": 'Talata',
            "wednesday": 'Laraba',
            "thursday": 'Alhamis',
            "friday": "Juma'a",
            "saturday": 'Asabar',
            "sunday": 'Lahadi',
            "schedule": 'Jadawali',
            "automate this transaction": "Yi atomatik wannan ma'amala",
            "your 4-digit pin": 'Fil ɗin ku mai lamba huɗu',
            "buy": "Saya",
            "prefered day of the month": "Ranar da aka fi so na wata",
            "prefered day of the week": "Ranar da aka fi so na mako",
            "buy and subscribe": "Saya kuma ku yi rajista",
            "buy data or airtime": 'Sayi Data ko Airtime?',
            'meter type': "Nau'in mita",
            'meter number': "Lambar mita",
            'customer id': "abokin ciniki ID",
            'account type': "Nau'in asusun",
            'pay': 'Biya',
            'transaction pin': "Ma'amala fil",
        },
        yo: {
            register: 'Forukọsilẹ',
            login: 'Wole',
            "remember me": 'Ranti mi',
            "sign up": 'Forukọsilẹ',
            "slidertextone": 'Ile itaja ti a ṣeto fun ọ laaye lati wa si alabara rẹ ni iyara',
            "slidertexttwo": 'ShopRecords gba ọ laaye lati tọju oju ile itaja rẹ nibikibi ti o lọ',
            "first name": 'Orukọ akọkọ',
            "last name": 'Oruko idile',
            "other name": 'Orukọ aarin',
            "full name": 'Akokun Oruko',
            "phone number": 'Nomba fonu',
            "e-mail": 'Imeeli',
            "address": 'adreesị',
            "data": 'Data',
            "airtime": 'airtime',
            "data size": 'Iwọn data',
            "amount": 'Elo?',
            "secret pin": 'PIN idunadura',
            "store or business name": 'Orukọ iṣowo',
            "store type": 'Itaja iru',
            "country": 'Orilẹ-ede',
            "state": 'Ìpínlẹ̀',
            "city": 'Ilu',
            "area": 'Agbegbe',
            "currency": 'Owo',
            "password": 'ọrọigbaniwọle',
            "forgot password": 'Gbagbe ọrọ aṣina bi',
            "get new password": 'Gba ọrọ igbaniwọle tuntun',
            "i have read the": 'Mo ti ka awọn',
            "terms and conditions": 'ofin ati ipo',
            "already have an account?": 'Ti ni iroyin tẹlẹ?',
            "optional": 'kii ṣe dandan',
            "please": 'Jowo',
            "wait": 'duro',
            "daily": 'Ojoojumo',
            "weekly": 'Osẹ-sẹsẹ',
            "monthly": 'Oṣooṣu',
            "monday": 'Ọjọ́-Ajé',
            "tuesday": 'Ọjọ́-Ìṣégun',
            "wednesday": 'Ọjọ́rú',
            "thursday": 'Ọjọ́bọ̀',
            "friday": 'Ọjọ́-Ẹtì',
            "saturday": 'Ọjọ́-Àbámẹ́ta',
            "sunday": 'Ọjọ́-Àìkú',
            "schedule": 'Iṣeto',
            "automate this transaction": 'Ṣe adaṣe iṣowo yii',
            "your 4-digit pin": 'PIN oni-nọmba mẹrin rẹ',
            "buy": "Ra",
            "prefered day of the month": "Ọjọ ti o fẹ ninu oṣu",
            "prefered day of the week": "Ayanfẹ ọjọ ti awọn ọsẹ",
            "buy and subscribe": "Ra ati alabapin",
            "buy data or airtime": 'Ra Data tabi Airtime?',
            'meter type': 'Mita iru',
            'meter number': 'Nọmba mita',
            'customer id': "onibara ID",
            'account type': "Iru iroyin",
            'pay': 'Sanwo',
            'transaction pin': 'PIN idunadura',
        },
        ig: {

            register: 'Debanye aha',
            login: 'Banye',
            "remember me": 'cheta m',
            "sign up": 'Debanye aha',
            "slidertextone": 'Ụlọ ahịa ahaziri ahazi na-enye gị ohere ịgakwuru onye ahịa gị ngwa ngwa',
            "slidertexttwo": 'ShopRecords na-enye gị ohere ileba anya na ụlọ ahịa gị ebe ọ bụla ị na-aga',
            "first name": 'Aha mbụ',
            "full name": "Aha n'uju",
            "last name": 'Aha ikpeazụ',
            "other name": 'Aha etiti',
            "phone number": 'Nọmba ekwentị',
            "e-mail": 'Email',
            "address": 'Address',
            "data": 'Data',
            "airtime": 'Oge ikuku',
            "data size": 'Nha data',
            "amount": 'Ego ole',
            "secret pin": 'PIN azụmahịa',
            "store or business name": 'Aha azụmahịa',
            "store type": 'Ụdị ụlọ ahịa',
            "country": 'Obodo, ala',
            "state": 'Steeti',
            "city": 'Obodo',
            "password": 'okwuntughe',
            "forgot password": 'Chefuru okwuntughe',
            "get new password": 'Nweta paswọọdụ ọhụrụ',
            "area": 'Mpaghara, uzo',
            "currency": 'Ego',
            "i have read the": 'Agụọla m',
            "terms and conditions": 'usoro na ọnọdụ',
            "already have an account?": 'Ị nwere akaụntụ?',
            "optional": 'ọ bụghị iwu',
            "please": 'biko',
            "wait": 'chere',
            "daily": 'Kwa ụbọchị',
            "weekly": 'kwa izu',
            "monthly": 'kwa ọnwa',
            "monday": 'Monday',
            "tuesday": 'Tuesday',
            "wednesday": 'Wednesday',
            "thursday": 'Thursday',
            "friday": 'Friday',
            "saturday": 'Saturday',
            "sunday": 'Sunday',
            "schedule": 'Nhazi oge',
            "automate this transaction": 'Megharịa azụmahịa a',
            "your 4-digit pin": 'Ntụtụ ọnụọgụ anọ gị',
            "buy": 'Zụrụ',
            "prefered day of the month": "Ụbọchị kacha mma n'ọnwa ahụ",
            "prefered day of the week": 'Ụbọchị kachasị mma nke izu',
            "buy and subscribe": 'Zụrụ ma denye aha',
            "buy data or airtime": 'Zụrụ data ma ọ bụ oge ikuku?',
            'meter type': 'ụdị mita',
            'meter number': 'Nọmba mita',
            'customer id': "ID ndị ahịa",
            'account type': "ụdị akaụntụ",
            'pay': 'Kwụọ',
            'transaction pin': 'Ntụtụ azụmahịa',
        },
    });
    i18n.locale = lang == null ? 'en' : lang;

    const translation = i18n.t(words.toLowerCase())
    if (translation.includes('missing')) {
        return words;
    }
    return translation
}

export default Translate