import React from 'react'
import imageInSrc from './imageInSrc.jpg'
class App extends React.Component {
    render() {
        return (
            <div>
                <div style={{ border: 'solid 1px black', maxWidth: '100vw' ,backgroundColor :'rgb(120 ,100 ,50 ,0.5)'}}>
                    <h1 className={'title red'}>Walid klai</h1>
                    <br />
                    <img src= {imageInSrc}/>
                    <br />
                    <img src='/imageInPublic.jpg' />
                </div>
                <video width="320" height="240" controls>
                    <source src="myVideo.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }
}
export default App