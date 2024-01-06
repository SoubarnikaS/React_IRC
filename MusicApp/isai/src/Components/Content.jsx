import React from 'react'
import Navbar from './Navbar'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Content = () => {
  return (
    <>
      <div className='contentBodyM'>

        <Navbar />
        <div className='spotlight'>
          <div className='spotlightCover'>
            <div className='coverS'>
              <img src='https://i.scdn.co/image/ab67706f00000002bd3bf9d47bea0eefd98bf7e1'></img>
            </div>
          </div>
          <div className='spotlightContent'>
            <div className='playlist'>
              <div className='playDesc'>
                Playlist
              </div>
              <div className='sponsored'>
                Sponsered
              </div>

            </div>
            <div className='title'>
              Kadhal Theeye
            </div>
            <div className='description'>
              Begin the year with passionate songs..Only on Kadhal Theeye!
            </div>
            <div className='buttonsRow'>
              <div className='buttons'>
                <div className='play'>
                  <button type='submit' className='playB'>Play</button>
                </div>
                <div className='follow'>
                  <button type='submit' className='followB'>Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className='greetingsM'>Greetings!</span>
        <div className='recentM'>
          <div className='top3'>
            <div className='songs'>
              <div className='songCover'>
                <img src={"https://i.scdn.co/image/ab67616d0000b2737657059390a7871c158fd966"} />
              </div>
              <div className='songTitle'>
                <span className='titleM'>Exist - The 7th Album</span>
                <div className='pl'>
                  <PlayArrowIcon style={{ fontSize: 30, padding: '10%' }} />
                </div>
              </div>
            </div>
            <div className='songs'>
              <div className='songCover'>
                <img src={"https://i.scdn.co/image/ab67616d00001e02025a0b128d60a5bc5779ab16"} />
              </div>
              <div className='songTitle'>
                <span className='titleM'>Expectation - I Do</span>
                <div className='pl'>
                  <PlayArrowIcon style={{ fontSize: 30, padding: '10%' }} />
                </div>
              </div>
            </div>
            <div className='songs'>
              <div className='songCover'>
                <img src={"https://i.scdn.co/image/ab67616d0000b273e70b87a4bd471f82768bdcb9"} />
              </div>
              <div className='songTitle'>
                <span className='titleM'>Don't Fight The Feeling</span>
                <div className='pl'>
                  <PlayArrowIcon style={{ fontSize: 30, padding: '10%' }} />
                </div>
              </div>
            </div>

          </div>
          <div className='top3'>
            <div className='songs'>
              <div className='songCover'>
                <img src={"https://i.scdn.co/image/ab67616d0000b27360de5d36fa5a9b5a764343c6"} />
              </div>
              <div className='songTitle'>
                <span className='titleM'>EXplOration - Live</span>
                <div className='pl'>
                  <PlayArrowIcon style={{ fontSize: 30, padding: '10%' }} />
                </div>
              </div>
            </div>
            <div className='songs'>
              <div className='songCover'>
                <img src={"https://i.scdn.co/image/ab67616d0000b27382c1b5cc2b62cae85ef7ffdb"} />
              </div>
              <div className='songTitle'>
                <span className='titleM'>Universe - Winter Special</span>
                <div className='pl'>
                  <PlayArrowIcon style={{ fontSize: 30, padding: '10%' }} />
                </div>
              </div>
            </div>
            <div className='songs'>
              <div className='songCover'>
                <img src={"https://upload.wikimedia.org/wikipedia/en/5/58/Exo_%E2%80%93_Don%27t_Mess_Up_My_Tempo.png"} />
              </div>
              <div className='songTitle'>
                <span className='titleM'>Don't Mess Up My Tempo</span>
                <div className='pl'>
                  <PlayArrowIcon style={{ fontSize: 30, padding: '10%' }} />
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default Content