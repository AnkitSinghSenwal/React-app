import './Video.css';

function Video(props){
    console.log(props)
    let topic = "React Js";
    let bg = 'dark';
    return (<> 
    <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" width='160' height='90'/>
    <div className={bg}> I am from video</div>
    </>)
}

export  default Video;