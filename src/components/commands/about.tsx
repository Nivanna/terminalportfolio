import black from '../../assets/black.jpg';

export default ()=>{
    return `
    <div class="about"> 
    <div ><img class="aboutimg" src=${black.src} width="190px" height="100px" alt="my profile"/></div><div class="aboutdescript"><p class="abouttext">
    My name is Srean Ponleu, a graduated student from Kirirom Institute of Technology, majoring in Computer Science. I'm a qualified backend developer with more than 2 years experiences in web development field, a problem solver, an innovator, and a commitment person.</p><ul class="aboutdetail"><li>
    ██░ DOB: 05 Sep 1999</li><li>
    ██░ Address: SvaiyTom Village, BerngReang Commune, KamReang District, Battambang Province</li><li>
    ██░ Tel: 0965864399</li><li>
    ██░ Email: sreanponleu39@gmail.com</li></ul><div class="aboutsocial">
    <a  href="https://github.com/Nivanna" target="_blank"> Github</a> <a  href="https://www.linkedin.com/in/ponleu-srean-091039211/" target="_blank"> Linkedin</a> <a  href="https://web.facebook.com/sreanponleu" target="_blank"> Facebook</a></div></div></div>
    `;
}