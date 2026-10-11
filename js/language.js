/**
 * Bilingual Support (English & Urdu) for Zohan & Rose Wedding Invitation
 */
(function () {
  'use strict';

  var translations = [
    {
      sel: '#rec2487446043 [field="tn_text_1763402147625"]',
      en: 'Zohan <br /><br />Rose',
      ur: 'زوہان <br /><br />روز',
      both: 'Zohan <br /><br />Rose<div class="bilingual-sub" style="font-size:28px;line-height:1.2;margin-top:10px;">زوہان اور روز</div>'
    },
    {
      sel: '#rec2487446043 [field="tn_text_176340398328864790"]',
      en: 'Wedding Day',
      ur: 'تقریبِ نکاح',
      both: 'Wedding Day • تقریبِ نکاح'
    },
    {
      sel: '#rec2487446043 [field="tn_text_176340401720454780"]',
      en: '27.09.26',
      ur: '۲۷ ستمبر ۲۰۲۶',
      both: '27.09.26'
    },
    {
      sel: '#rec2487446043 [field="tn_text_176340390975774690"]',
      en: '&amp;',
      ur: 'اور',
      both: '&amp;'
    },
    {
      sel: '#rec2487446043 [field="tn_text_1780748008617000003"]',
      en: 'Two Souls <br />One destiny <br />A Lifetime written by Allah',
      ur: 'دو روحیں <br />ایک مقدر <br />اللہ کا لکھا ہوا رشتہ',
      both: 'Two Souls • One destiny • A Lifetime written by Allah<div class="bilingual-sub" style="font-size:22px;margin-top:6px;">دو روحیں، ایک مقدر، اللہ کی لکھی ہوئی داستانِ حیات</div>'
    },
    {
      sel: '#rec2487446043 [field="tn_text_1780748008617000005"]',
      en: 'Dear Friends and Family <br />Join us for an evening of love, laughter, duas, and unforgettable memories as we begin our forever.',
      ur: 'عزیز دوست و اقارب <br />ہماری نئی زندگی کے آغاز پر، محبت، دعاؤں اور یادگار لمحوں میں ہماری خوشیوں میں شریک ہوں۔',
      both: 'Dear Friends and Family <br />Join us for an evening of love, laughter, duas, and unforgettable memories as we begin our forever.<div class="bilingual-sub" style="font-size:16px;margin-top:6px;">عزیز دوست و اقارب، ہماری نئی زندگی کے پرمسرت آغاز پر دعاؤں اور خوشیوں میں شریک ہوں۔</div>'
    },
    {
      sel: '#rec2487446043 [field="tn_text_1782235970225000002"]',
      en: 'Scroll down',
      ur: 'نیچے دیکھیں',
      both: 'Scroll down • نیچے دیکھیں'
    },
    {
      sel: '#rec2487446093 [field="tn_text_1771277026942000001"]',
      en: 'The Celebration Begins In',
      ur: 'تقریب کے آغاز میں باقی وقت',
      both: 'The Celebration Begins In • تقریب کے آغاز میں باقی وقت'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1763405219328"]',
      en: 'Schedule of Events',
      ur: 'پروگرام کی تفصیلات',
      both: 'Schedule of Events • پروگرام کی تفصیلات'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1763405268776"]',
      en: 'Guest Arrival',
      ur: 'آمدِ مہمانان',
      both: 'Guest Arrival • آمدِ مہمانان'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1772803062504"]',
      en: '5 PM',
      ur: 'شام ۵ بجے',
      both: '5 PM'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1772803288793000002"]',
      en: 'Nikkah Ceremony',
      ur: 'مراسمِ نکاح',
      both: 'Nikkah Ceremony • مراسمِ نکاح'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1772803288793000003"]',
      en: '6 PM',
      ur: 'شام ۶ بجے',
      both: '6 PM'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1782315605037000003"]',
      en: 'Mocktail Hour',
      ur: 'موک ٹیل کا وقت',
      both: 'Mocktail Hour • موک ٹیل'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1782315588274000002"]',
      en: '7 PM',
      ur: 'شام ۷ بجے',
      both: '7 PM'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1778517684813000001"]',
      en: 'Dinner',
      ur: 'دعوتِ طعام',
      both: 'Dinner • دعوتِ طعام'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1778517684813000002"]',
      en: '8 PM',
      ur: 'رات ۸ بجے',
      both: '8 PM'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1772803619332000008"]',
      en: 'Dance',
      ur: 'محفلِ جشن',
      both: 'Dance • محفلِ جشن'
    },
    {
      sel: '#rec2487446103 [field="tn_text_1772803619332000009"]',
      en: '9 PM',
      ur: 'رات ۹ بجے',
      both: '9 PM'
    },
    {
      sel: '#rec2487446153 [field="tn_text_1771277026942000001"]',
      en: 'Location',
      ur: 'مقام',
      both: 'Location • مقام'
    },
    {
      sel: '#rec2487446153 [field="tn_text_1772804808869"]',
      en: 'Islamic Center of Melville',
      ur: 'اسلامک سینٹر آف میلویل',
      both: 'Islamic Center of Melville • اسلامک سینٹر آف میلویل'
    },
    {
      sel: '#rec2487446153 [field="tn_text_1772813480591000001"]',
      en: 'Address: 118 Old East Neck Road Melville, NY 11747',
      ur: 'پتہ: 118 Old East Neck Road Melville, NY 11747',
      both: 'Address: 118 Old East Neck Road Melville, NY 11747'
    },
    {
      sel: '#rec2487446183 [field="tn_text_1763405219328"]',
      en: 'Gift Preference',
      ur: 'تحائف کی بابت',
      both: 'Gift Preference • تحائف کی بابت'
    },
    {
      sel: '#rec2487446183 [field="tn_text_1772813849329000001"]',
      en: 'Kindly, no boxed gifts please.',
      ur: 'برائے مہربانی، بکس والے تحائف لانے سے گریز فرمائیں۔ دعائیں ہی سب سے بڑا تحفہ ہیں۔',
      both: 'Kindly, no boxed gifts please.<div class="bilingual-sub">برائے مہربانی بکس والے تحائف لانے سے گریز فرمائیں۔ دعائیں ہی سب سے بڑا تحفہ ہیں۔</div>'
    },
    {
      sel: '#rec2487446183 [field="tn_text_1778524751695000002"]',
      en: 'Dress Code',
      ur: 'لباس کی رہنمائی',
      both: 'Dress Code • لباس کی رہنمائی'
    },
    {
      sel: '#rec2487446183 [field="tn_text_1778524751695000001"]',
      en: 'We kindly ask guests to avoid deep red and maroon attire for the celebration.',
      ur: 'مہمانوں سے التماس ہے کہ تقریب میں گہرے سرخ اور مہرون رنگ کے لباس سے پرہیز فرمائیں۔',
      both: 'We kindly ask guests to avoid deep red and maroon attire for the celebration.<div class="bilingual-sub">مہمانوں سے التماس ہے کہ تقریب میں گہرے سرخ اور مہرون رنگ کے لباس سے پرہیز فرمائیں۔</div>'
    },
    {
      sel: '#weiTapLabel',
      en: 'Tap to open',
      ur: 'کھولنے کے لیے دبائیں',
      both: 'Tap to open • کھولنے کے لیے دبائیں'
    }
  ];

  var timerLabels = {
    'tb-days': { en: 'Days', ur: 'دن', both: 'Days / دن' },
    'tb-hours': { en: 'Hours', ur: 'گھنٹے', both: 'Hours / گھنٹے' },
    'tb-mins': { en: 'Minutes', ur: 'منٹ', both: 'Minutes / منٹ' },
    'tb-secs': { en: 'Seconds', ur: 'سیکنڈ', both: 'Seconds / سیکنڈ' }
  };

  var locationCard = {
    title: { en: 'Location', ur: 'مقام', both: 'Location • مقام' },
    venue: {
      en: 'Islamic Center<br>of Melville',
      ur: 'اسلامک سینٹر<br>آف میلویل',
      both: 'Islamic Center<br>of Melville<div class="bilingual-sub" style="font-size:15px;margin-top:3px;">اسلامک سینٹر آف میلویل</div>'
    },
    maps: { en: 'Open in Maps', ur: 'گوگل میپس پر دیکھیں', both: 'Open in Maps • نقشہ' },
    calendar: { en: 'Add to Calendar', ur: 'کیلنڈر میں شامل کریں', both: 'Add to Calendar • کیلنڈر' }
  };

  var currentLang = localStorage.getItem('inv_lang') || 'en';

  function applyLanguage(lang) {
    if (lang !== 'en' && lang !== 'ur') {
      lang = 'en';
    }
    currentLang = lang;
    localStorage.setItem('inv_lang', lang);

    document.body.classList.remove('lang-en', 'lang-ur', 'lang-both');
    document.body.classList.add('lang-' + lang);

    // Update switcher active states
    var btns = document.querySelectorAll('.lang-btn');
    btns.forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update main text items
    translations.forEach(function (item) {
      var el = document.querySelector(item.sel);
      if (el) {
        el.innerHTML = item[lang] || item.en;
      }
    });

    // Update countdown timer labels
    for (var tbId in timerLabels) {
      var tb = document.getElementById(tbId);
      if (tb) {
        var labelEl = tb.querySelector('.label');
        if (labelEl) {
          labelEl.textContent = timerLabels[tbId][lang] || timerLabels[tbId].en;
        }
      }
    }

    // Update Location card inside rec2487446163
    var rec6163 = document.getElementById('rec2487446163');
    if (rec6163) {
      var divs = rec6163.querySelectorAll('.tn-atom__html > div > div > div');
      if (divs.length >= 2) {
        divs[0].innerHTML = locationCard.title[lang] || locationCard.title.en;
        divs[1].innerHTML = locationCard.venue[lang] || locationCard.venue.en;
      }
      var mapBtn = rec6163.querySelector('a[href*="maps"]');
      if (mapBtn) mapBtn.innerHTML = locationCard.maps[lang] || locationCard.maps.en;

      var calBtn = rec6163.querySelector('a[href*="calendar"]');
      if (calBtn) calBtn.innerHTML = locationCard.calendar[lang] || locationCard.calendar.en;
    }
  }

  function init() {
    // Create language switcher if not in DOM
    if (!document.getElementById('invLangSwitcher')) {
      var switcher = document.createElement('div');
      switcher.id = 'invLangSwitcher';
      switcher.className = 'inv-lang-switcher';
      switcher.innerHTML =
        '<button type="button" class="lang-btn" data-lang="en">English</button>' +
        '<span class="lang-divider">|</span>' +
        '<button type="button" class="lang-btn" data-lang="ur">اردو</button>';

      document.body.appendChild(switcher);

      switcher.addEventListener('click', function (e) {
        var target = e.target;
        if (target && target.classList.contains('lang-btn')) {
          var selected = target.getAttribute('data-lang');
          if (selected) {
            applyLanguage(selected);
          }
        }
      });
    }

    applyLanguage(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.setInvitationLanguage = applyLanguage;
})();
