const Skills = () => {
  return (
    <section className="bg-white mt-10 text-black w-full flex flex-col items-center gap-y-16 py-10">
      <article className="w-9/12">
        <h1>Skills</h1>
        <h5>Front-End</h5>
        <div className="flex w-full gap-x-10">
          <article>
            <img className="w-24" src="https://i.postimg.cc/TwDxbv37/html-5-1.png" alt="" />
            <h2 className="text-center">HTML5</h2>
          </article>
          <article>
            <img className="w-24" src="https://i.postimg.cc/cCtv6bp0/CSS3-logo.png" alt="" />
            <h2 className="text-center">CSS3</h2>
          </article>
          <article>
            <img className="w-24" src="https://i.postimg.cc/B6pvbGYr/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo.png" alt="" />
            <h2 className="text-center">Javascript</h2>
          </article>
          <article>
            <img className="w-24" src="https://i.postimg.cc/cJKj67D0/React.png" alt="" />
            <h2 className="text-center">React</h2>
          </article>
          <article>
            <img className="w-24" src="https://i.postimg.cc/1t3tssVT/tailwindcss-logo-icon-167923.png" alt="" />
            <h2 className="text-center">Tailwind</h2>
          </article>
          <article>
            <img className="w-24" src="https://i.postimg.cc/jjK9WjX8/pixelcut-export.png" alt="" />
            <h2 className="text-center">Bootstrap</h2>
          </article>
        </div>
      </article>
      <article className="w-9/12">
        <h5>Back-end</h5>
        <div className="flex w-full gap-x-10">
          <article>
          <img className="w-24" src="https://i.postimg.cc/9X4NXfqj/php-1.png" alt="" />
          <h2>PHP</h2>
        </article>
        <article>
          <img className="w-24" src="https://i.postimg.cc/pr8ZfpDh/Mysql-logo.png" alt="" />
          <h2>MySQL</h2>
        </article>
        <article>
          <img className="w-24" src="https://i.postimg.cc/8cDHbTwZ/logo-firebase-removebg-preview.png" alt="" />
          <h2>Firebase</h2>
        </article>
        </div>
      </article>
    </section>
  )
}

export default Skills
