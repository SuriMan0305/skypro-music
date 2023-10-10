import './central.css'
import {TrackInfo} from './Tracks';

const MainContent = () => {
  return         <div className="centerblock__content">
  <div className="content__title playlist-title">
    <div className="playlist-title__col col01">Трек</div>
    <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
    <div className="playlist-title__col col03">АЛЬБОМ</div>
    <div className="playlist-title__col col04">
      <svg className="playlist-title__svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-watch" />
      </svg>
    </div>
  </div>
    <div className="content__playlist playlist">
      <TrackInfo title='Guilt' name='Nero' album='Welcome Reality' time="4:44" />
      <TrackInfo title='Elektro' name='Dynoro, Outwork, Mr. Gee' album='Elektro' time="2:22" />
      <TrackInfo title='I’m Fire' name='Ali Bakgor' album='I’m Fire' time="2:22" />
      <TrackInfo title='Non Stop' remix='(Remix)' name='Стоункат, Psychopath' album='Non Stop' time="4:12" />
      <TrackInfo title='Run Run' remix='(feat. AR/CO)' name='Jaded, Will Clarke, AR/CO' album='Run Run' time="2:54" />
      <TrackInfo title='Eyes on Fire' remix='(Zeds Dead Remix)' name='Blue Foundation, Zeds Dead' album='Eyes on Fire' time="5:20" />
      <TrackInfo title='Mucho Bien' remix='(Hi Profile Remix)' name='HYBIT, Mr. Black, Offer Nissim, Hi Profile' album='Mucho Bien' time="3:41" />
      <TrackInfo title='Knives n Cherries' name='minthaze' album='Captivating' time="1:48" />
      <TrackInfo title='Knives n Cherries' name='minthaze' album='Captivating' time="1:48" />
      <TrackInfo title='Knives n Cherries' name='minthaze' album='Captivating' time="1:48" />
  </div>
</div>
}

export {MainContent};