import { Link } from 'react-router-dom';
import melatonin from '../assets/melatonin.png';
import med from '../assets/med.png';

function Act4() {
  return (
    <main className="section">
      <h2>Act 4</h2>
      <p>Now after enjoying myslef I thought I could finish the last 3 days of spring break on a good note by finishing more homework. But boy was I wrong! I came down with the flue and I had uncontrollable stomach pain. However, I did not let that stop me becasue I was really stressed because I did not feel like I have done enough to prepare for my classes. Especially for my physics test. So I tried to push through the pain and continue working.</p>
      <p>However, that ended up being a terrible mistake. Due to all the stress that I had put on myself I ended up causing myself to have stress induced insomnia. I was unable to sleep for 2 days stright. I was functioning off of 5 hours of sleep for 50 hours. It truly made my flue and stomach pain worse. I started hallucinating and experiencing other side effects.</p>
      <p>Thankfully I have a supportive network of friends and famly who helped me through this. I started by taking some cough medication, melatonin, and tried to destress by reading a book. Finally after all the efforts I was able to fall asleep and break the curse. After waking up I felt much better. This was truly the first time in my life where I experienced stress as bad as this.</p>      
      <img src={melatonin} alt="Melatonin" className="blog-image" />
      <img src={med} alt="Medication" className="blog-image" />
      
      <div className="back-container">
        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </main>
  );
}

export default Act4;