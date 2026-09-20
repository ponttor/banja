import { useEffect, useState } from 'react'
import { Head } from '@inertiajs/react'

import logoWhite from '../../assets/logo-white.png'
import heroVideoUrl from '../../assets/hero-parenie.mp4'
import heroPoster from '../../assets/hero-poster.jpg'
import practiceHallPhoto from '../../assets/practice-hall.jpg'
import stayDiningPhoto from '../../assets/stay-dining.jpg'
import stayCourtyardPhoto from '../../assets/stay-courtyard.jpg'
import venueExteriorPhoto from '../../assets/venue-exterior.jpg'
import room1Photo from '../../assets/room-1.jpg'
import room2Photo from '../../assets/room-2.jpg'
import room3Photo from '../../assets/room-3.jpg'
import room4Photo from '../../assets/room-4.jpg'
import courtyardBuildingPhoto from '../../assets/courtyard-building.jpg'
import courtyardTerracePhoto from '../../assets/courtyard-terrace.jpg'
import leaderTatianaPhoto from '../../assets/leader-tatiana.jpg'
import banyaPareniePhoto from '../../assets/banya-parenie.jpg'
import logoSGraphic from '../../assets/logo-s.png'
import venueSaunaPhoto from '../../assets/venue-sauna.jpg'
import cs from './index.module.css'

const SCHEDULE = [
  {
    name: 'Пятница',
    date: '27 ноября — заезд',
    items: [
      { time: 'уточняется', what: 'Заезд, размещение, знакомство' },
      { time: 'уточняется', what: 'Ужин' },
      { time: 'уточняется', what: 'Вечерний круг и дыхательная практика' },
    ],
  },
  {
    name: 'Суббота',
    date: '28 ноября',
    items: [
      { time: 'уточняется', what: 'Утренняя практика' },
      { time: 'уточняется', what: 'Завтрак' },
      { time: 'уточняется', what: 'Телесная сессия' },
      { time: 'уточняется', what: 'Обед и свободное время / прогулка' },
      { time: 'уточняется', what: 'Женская баня' },
      { time: 'уточняется', what: 'Ужин и вечерний круг' },
    ],
  },
  {
    name: 'Воскресенье',
    date: '29 ноября — отъезд',
    items: [
      { time: 'уточняется', what: 'Утренняя практика' },
      { time: 'уточняется', what: 'Завтрак' },
      { time: 'уточняется', what: 'Завершающий круг' },
      { time: 'уточняется', what: 'Отъезд' },
    ],
  },
]

type GalleryPhoto = { src: string; alt: string }

const VENUE_PHOTOS: GalleryPhoto[] = [
  { src: courtyardBuildingPhoto, alt: 'Мельница со стороны внутреннего двора' },
  { src: stayCourtyardPhoto, alt: 'Внутренний двор мельницы, увитый цветами' },
  { src: courtyardTerracePhoto, alt: 'Крытая терраса с гортензией у пруда' },
  { src: venueSaunaPhoto, alt: 'Баня изнутри — полки, шайка и печь с камнями' },
]

const STAY_PHOTOS: GalleryPhoto[] = [
  { src: room1Photo, alt: 'Спальня с бархатной кушеткой и розовыми шторами' },
  { src: room2Photo, alt: 'Спальня в полоску, с плетёным светильником' },
  { src: room3Photo, alt: 'Спальня в тёплых тонах с деревянным шкафом' },
  { src: room4Photo, alt: 'Спальня с розовым текстилем и плетёным ковром' },
]

export default function RetreatIndex() {
  const [lightbox, setLightbox] = useState<{ photos: GalleryPhoto[]; index: number } | null>(null)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') {
        setLightbox((l) => (l ? { ...l, index: (l.index + 1) % l.photos.length } : l))
      }
      if (e.key === 'ArrowLeft') {
        setLightbox((l) => (l ? { ...l, index: (l.index - 1 + l.photos.length) % l.photos.length } : l))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <div className={cs.page}>
      <Head title="Soft — ретрит выходного дня">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={cs.grain} aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency={0.85} numOctaves={2} stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* ================= HERO ================= */}
      <section className={cs.hero} id="top">
        <nav className={cs.topNav} aria-label="Разделы страницы">
          <a href="#program">О ретрите</a>
          <a href="#schedule">Расписание</a>
          <a href="#leaders">Ведущие</a>
          <a href="#booking">Условия</a>
        </nav>
        <video
          className={cs.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        <div className={cs.heroScrim} aria-hidden="true" />
        <div className={cs.heroInner}>
          <img className={cs.heroLogo} src={logoWhite} alt="Soft — weekend retreat" />
          <div className={cs.heroDates}>
            <span className={cs.heroDatesRange}>27&nbsp;&mdash;&nbsp;29 ноября</span>
            <span className={cs.heroDatesDays}>пятница&nbsp;&ndash;&nbsp;воскресенье</span>
          </div>
          <div className={cs.heroPlace}>Salvey Mühle by ZaZa, Бранденбург</div>
        </div>
        <div className={cs.scrollCue}>
          <span>Листайте</span>
          <div className={cs.stem} />
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className={cs.quote}>
        <div className={cs.quoteMark}>&ldquo;</div>
        <blockquote>
          Три дня без будильника — только дыхание, пар и тишина леса,
          <br />
          чтобы тело вспомнило, что можно не спешить.
        </blockquote>
        <cite>Soft · weekend retreat</cite>
      </section>

      {/* ================= PROGRAM ================= */}
      <section className={cs.section} id="program">
        <div className={cs.wrap}>
          <div className={cs.sectionHead}>
            <div className={cs.eyebrow}>Программа</div>
            <h2>Три дня для тела</h2>
            <p className={cs.programLede}>
              Здесь тело — не фон для мыслей, а главная тема выходных. Дыхательные сессии
              и телесные практики в зале с видом на сад, женская баня с мягким паром
              и веничными ритуалами, неспешные трапезы и тишина природного парка
              Unteres&nbsp;Odertal вокруг. Можно гулять, можно молчать, можно ничего
              не делать — на это тоже есть время.
            </p>
          </div>

          <div className={cs.programFacts}>
            <div className={cs.programFact}>
              <div className={cs.num}>01</div>
              <h3>Дыхание и тело</h3>
              <p>Дыхательные сессии и телесные практики в зале 50&nbsp;м² с ровным полом.</p>
            </div>
            <div className={cs.programFact}>
              <div className={cs.num}>02</div>
              <h3>Баня и парение</h3>
              <p>Групповая женская баня с мягким паром и отдельное VIP-парение по записи.</p>
            </div>
            <div className={cs.programFact}>
              <div className={cs.num}>03</div>
              <h3>Природа и тишина</h3>
              <p>Сад, ручей и пруд на территории, прогулки и лёгкий хайкинг по парку.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      <section className={`${cs.section} ${cs.schedule}`} id="schedule">
        <div className={cs.wrap}>
          <div className={cs.sectionHead}>
            <div className={cs.eyebrow}>Расписание</div>
            <h2>Как проходят выходные</h2>
          </div>

          <div className={cs.scheduleDays}>
            {SCHEDULE.map((day) => (
              <div className={cs.day} key={day.name}>
                <div className={cs.dayHead}>
                  <span className={cs.dayName}>{day.name}</span>
                  <span className={cs.dayDate}>{day.date}</span>
                </div>
                <div className={cs.dayItems}>
                  {day.items.map((item, i) => (
                    <div className={cs.dayItem} key={i}>
                      <time>{item.time}</time>
                      <div className={cs.what}>{item.what}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={cs.draftNote}>черновой каркас — время и содержание дополним</div>
        </div>
      </section>

      {/* ================= LEADERS ================= */}
      <section className={cs.section} id="leaders">
        <div className={cs.wrap}>
          <div className={cs.sectionHead}>
            <div className={cs.eyebrow}>Ведущие</div>
            <h2>Кто проводит выходные</h2>
          </div>

          <div className={cs.leadersGrid}>
            <div>
              <div className={cs.leaderPhoto}>
                <span className={cs.mono}>А.А.</span>
                <span className={cs.tag}>фото — добавим</span>
              </div>
              <h3 className={cs.leaderName}>Анна Азарова</h3>
              <div className={cs.leaderRole}>Актриса · зожница</div>
              <div className={cs.leaderTags}>
                <span>актриса</span>
                <span>зожница</span>
                <span>дружит со своим телом</span>
              </div>
              <p className={`${cs.leaderBio} ${cs.draft}`}>
                Полное описание скоро дополним — черновой вариант.
              </p>
            </div>

            <div>
              <div className={cs.leaderPhoto}>
                <img src={leaderTatianaPhoto} alt="Татьяна Илларионова" />
              </div>
              <h3 className={cs.leaderName}>Татьяна Илларионова</h3>
              <div className={cs.leaderRole}>Психолог · пармастерица</div>
              <p className={cs.leaderBio}>
                Сертифицированный фасилитатор дыхательных и телесных техник с многолетним
                опытом. Помогаю женщинам услышать своё тело, снять напряжение и увеличить
                его энергоёмкость. Провожу трансформирующие дыхательные сессии и нежные
                парения, которые помогают высвободить застарелые эмоции и блоки, найти
                внутреннюю гармонию и почувствовать лёгкость.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BANYA ================= */}
      <section className={`${cs.section} ${cs.banya}`} id="banya">
        <img
          className={cs.banyaPhoto}
          src={banyaPareniePhoto}
          alt="Татьяна парит гостью берёзовым веником в бане"
        />
        <div className={cs.banyaScrim} aria-hidden="true" />
        <img className={`${cs.bigS} ${cs.bigSBanya}`} src={logoSGraphic} aria-hidden="true" alt="" />
        <div className={cs.wrap}>
          <div className={cs.banyaHead}>
            <div className={cs.eyebrow}>Ритуал</div>
            <h2>Нежная баня</h2>
            <p className={cs.banyaSub}>
              Для тех, кто соскучился по родной банной традиции, запаху веников
              и долгому отдыху без спешки.
            </p>
            <p className={cs.banyaBody}>
              В программе — групповая женская баня с мягким паром, неспешным прогревом
              и веничными ритуалами. Главная задача — отогреться, расслабиться
              и на несколько часов выключить голову.
            </p>
          </div>

          <div className={cs.vipCard}>
            <div className={cs.eyebrow}>Отдельно</div>
            <h3>VIP-парение</h3>
            <p>Индивидуальный ритуал, полностью выстроенный под состояние и чувствительность тела.</p>
            <div className={cs.note}>по записи, количество мест ограничено</div>
          </div>
        </div>
      </section>

      {/* ================= PRACTICES ================= */}
      <section className={cs.section} id="practices">
        <div className={cs.wrap}>
          <div className={cs.practicesHead}>
            <div className={cs.sectionHead}>
              <div className={cs.eyebrow}>Практики</div>
              <h2>Что будет в практике</h2>
              <p>
                Программа собрана из мягких, но действенных техник — того, что помогает
                телу расслабиться, а голове отпустить лишнее. Никакой гонки за формой
                и результатом — только контакт с собой в своём темпе.
              </p>
            </div>
            <div className={cs.practicesPhoto}>
              <img src={practiceHallPhoto} alt="Зал для практик — балки, тёплый свет, тишина" />
            </div>
          </div>

          <div className={cs.practicesGrid}>
            <div className={cs.practiceItem}>
              <div className={cs.eyebrow}>01</div>
              <h3>Дыхательные практики</h3>
              <p>Осознанное связное дыхание — мягко выводит из головы в тело и снимает накопленное напряжение.</p>
            </div>
            <div className={cs.practiceItem}>
              <div className={cs.eyebrow}>02</div>
              <h3>Телесные практики</h3>
              <p>Мягкая работа с телом и растяжка в зале 50&nbsp;м² — без формы «на результат», в своём темпе.</p>
            </div>
            <div className={cs.practiceItem}>
              <div className={cs.eyebrow}>03</div>
              <h3>Женская баня и парение</h3>
              <p>Веничные ритуалы и мягкий пар — отдельная большая часть выходных, подробнее выше, в разделе «Нежная баня».</p>
            </div>
            <div className={cs.practiceItem}>
              <div className={cs.eyebrow}>04</div>
              <h3>Тишина и прогулки</h3>
              <p>Свободное время и природный парк Unteres&nbsp;Odertal вокруг — пространство, где не нужно ничего успевать.</p>
            </div>
          </div>
          <div className={cs.draftNote}>список практик — черновой, уточним вместе с Аней и Таней</div>
        </div>
      </section>

      {/* ================= VENUE / МЕСТО ================= */}
      <section className={`${cs.section} ${cs.venue}`} id="venue">
        <div className={cs.wrap}>
          <div className={cs.venueIntro}>
            <div className={cs.venuePhotoMain}>
              <img src={venueExteriorPhoto} alt="Историческая водяная мельница Salvey Mühle снаружи" />
            </div>
            <div className={cs.venueText}>
              <div className={cs.eyebrow}>Место</div>
              <h2>Salvey Mühle by ZaZa</h2>
              <p>
                Мы будем жить на старой водяной мельнице посреди природного парка
                «Нижняя долина Одера». У мельницы 20&nbsp;000&nbsp;м² собственной
                территории и никаких соседей поблизости — только сад, пруд, ручей и холмы.
              </p>
              <p>
                Мельнице больше 760&nbsp;лет. Хозяева бережно её отреставрировали,
                сохранив деревянные полы, двери и окна. Здесь тихо, много воздуха
                и достаточно места, чтобы гулять, отдыхать у воды и никуда не спешить.
              </p>
            </div>
          </div>

          <div className={cs.venueGrid}>
            <div className={cs.venueItem}>
              <div className={cs.eyebrow}>Зал</div>
              <h3>Зал 50 м²</h3>
              <p>Отдельное пространство с ровным полом для йоги, телесных и групповых занятий.</p>
            </div>
            <div className={cs.venueItem}>
              <div className={cs.eyebrow}>Баня</div>
              <h3>Сауна на 8 человек</h3>
              <p>
                Стоит отдельно от жилого дома, рядом — два душа и туалет.
                После парения можно охлаждаться в ручье, который течёт по территории.
              </p>
            </div>
            <div className={cs.venueItem}>
              <div className={cs.eyebrow}>Природа</div>
              <h3>Unteres Odertal</h3>
              <p>
                Мельница стоит уединённо среди сада, ручья и пруда. Вокруг — природный
                парк, озеро и маршруты для прогулок и велосипеда. Ближайший город —
                Гарц (Одер), около 6&nbsp;км.
              </p>
            </div>
          </div>

          <div className={cs.venueBanner}>
            {VENUE_PHOTOS.map((photo, i) => (
              <button
                type="button"
                key={photo.src}
                className={cs.venueBannerItem}
                onClick={() => setLightbox({ photos: VENUE_PHOTOS, index: i })}
                aria-label={`Увеличить: ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} />
              </button>
            ))}
          </div>

          <div className={cs.venueTravel}>
            <div>
              <h3 className={cs.eyebrow}>Адрес</h3>
              <div className={cs.addr}>
                <span className={cs.place}>Salvey Mühle by ZaZa</span>
                Salveymühle 3, 16307 Gartz (Oder)-Geesow, Brandenburg
              </div>
            </div>
            <div>
              <h3 className={cs.eyebrow}>Как добраться из Берлина</h3>
              <p>На машине — около 1,5 часов от Berlin Alexanderplatz.</p>
              <p>
                На поезде — ближайшая станция Tantow, примерно в 2 км от мельницы;
                оттуда можно организовать трансфер.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STAY / ПРОЖИВАНИЕ ================= */}
      <section className={`${cs.section} ${cs.stay}`} id="stay">
        <div className={cs.wrap}>
          <div className={cs.sectionHead}>
            <div className={cs.eyebrow}>Проживание</div>
            <h2>Где и как мы будем жить</h2>
            <p>
              Разместимся в Mühlenwohnhaus — основном жилом доме мельницы, в паре шагов
              от зала для практик и бани. 8&nbsp;спален на 12&nbsp;человек — 4 двухместные
              и 4 одноместные, 4 ванные комнаты на всех, общая кухня, гостиная и зимний сад.
              Комнаты разные по цвету и настроению, но везде — дерево, мягкий свет
              и вид на воду или сад.
            </p>
          </div>

          <div className={cs.stayGallery}>
            {STAY_PHOTOS.map((photo, i) => (
              <button
                type="button"
                key={photo.src}
                className={cs.stayGalleryItem}
                onClick={() => setLightbox({ photos: STAY_PHOTOS, index: i })}
                aria-label={`Увеличить: ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} />
              </button>
            ))}
          </div>
          <div className={cs.draftNote}>варианты размещения и стоимость по каждому — добавим</div>
        </div>
      </section>

      {/* ================= FOOD / ПИТАНИЕ ================= */}
      <section className={cs.section} id="food">
        <div className={cs.wrap}>
          <div className={cs.foodGrid}>
            <div>
              <div className={cs.sectionHead}>
                <div className={cs.eyebrow}>Питание</div>
                <h2>Питание</h2>
                <p>
                  Завтраки и ужины готовим на месте — из простых, свежих и сезонных
                  продуктов, мягко и без ограничений. Обед в субботу — часть свободного
                  времени: можно перекусить самим или прогуляться до соседнего Гарца (Одер).
                </p>
              </div>
              <div className={cs.draftNote}>меню и формат питания — уточняются</div>
            </div>
            <div className={cs.foodPhoto}>
              <img src={stayDiningPhoto} alt="Общая столовая в доме мельницы" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKING / УСЛОВИЯ БРОНИ ================= */}
      <section className={`${cs.section} ${cs.booking}`} id="booking">
        <img className={`${cs.bigS} ${cs.bigSBooking}`} src={logoSGraphic} aria-hidden="true" alt="" />
        <div className={cs.wrap}>
          <div className={cs.sectionHead}>
            <div className={cs.eyebrow}>Условия</div>
            <h2>Условия брони</h2>
          </div>

          <div className={cs.bookingFacts}>
            <div className={cs.bookingFact}>
              <div className={cs.eyebrow}>Что входит</div>
              <h3>В стоимость</h3>
              <p>Проживание в Salvey Mühle, участие во всех практиках, женская баня и завтраки с ужинами.</p>
            </div>
            <div className={cs.bookingFact}>
              <div className={cs.eyebrow}>Стоимость</div>
              <h3>Уточняется</h3>
              <p>Цена по типам размещения (одноместное / двухместное) добавим отдельно.</p>
            </div>
            <div className={cs.bookingFact}>
              <div className={cs.eyebrow}>Бронирование</div>
              <h3>Места ограничены</h3>
              <p>Для брони места — предоплата, остаток вносится ближе к дате заезда. Сумму и реквизиты добавим.</p>
            </div>
          </div>
          <div className={cs.draftNote}>цены и точные условия брони — добавим</div>
        </div>
      </section>

      <footer className={cs.footer}>
        <div className={cs.footLogo}>soft</div>
        <div className={cs.footDates}>27&nbsp;&mdash;&nbsp;29 ноября · пятница&ndash;воскресенье</div>
        <div className={cs.footPlace}>Salvey Mühle by ZaZa, Brandenburg</div>
        <div className={cs.footNote}>бронирование и контакты — добавим</div>
      </footer>

      {lightbox !== null && (
        <div
          className={cs.lightbox}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.photos[lightbox.index].alt}
        >
          <button
            type="button"
            className={cs.lightboxClose}
            onClick={() => setLightbox(null)}
            aria-label="Закрыть"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            className={`${cs.lightboxArrow} ${cs.lightboxArrowPrev}`}
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((l) => (l ? { ...l, index: (l.index - 1 + l.photos.length) % l.photos.length } : l))
            }}
            aria-label="Предыдущее фото"
          >
            <svg width="16" height="26" viewBox="0 0 16 26" fill="none">
              <path d="M14 2L3 13L14 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className={`${cs.lightboxArrow} ${cs.lightboxArrowNext}`}
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((l) => (l ? { ...l, index: (l.index + 1) % l.photos.length } : l))
            }}
            aria-label="Следующее фото"
          >
            <svg width="16" height="26" viewBox="0 0 16 26" fill="none">
              <path d="M2 2L13 13L2 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <img
            className={cs.lightboxImg}
            src={lightbox.photos[lightbox.index].src}
            alt={lightbox.photos[lightbox.index].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <div className={cs.lightboxCount}>
            {lightbox.index + 1} / {lightbox.photos.length}
          </div>
        </div>
      )}
    </div>
  )
}
