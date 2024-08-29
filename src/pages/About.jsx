import books from "../assets/books.jpg"
import mission from "../assets/mission.jpg"
export default function About() {
  return (
    <div id="About" className="flex flex-col text-white gap-10">
        <h1 className="text-6xl items-center justify-center flex sm:text-7xl md:text-8xl lg:text-9xl mb-3 font-[100]">About us
        </h1>
        <h1 className="items-center justify-center flex text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 text-gray-400 leading-relaxed ">Our Story
        </h1>
        <div className="flex gap-10 justify-evenly items-center">
      <img className="max-w-96 rounded-xl" src={books}/>
      <p className="w-[30%]">At Bookly, we believe that books are more than just words on a page—they are gateways to new worlds, ideas, and perspectives. Our journey began with a simple passion for literature, and over the years, we&apos;ve grown into a vibrant community of readers, writers, and book lovers. Whether you re searching for the latest bestsellers or a rare classic, we&apos;re here to help you discover your next great read.</p>
        </div>

        <h1 className="items-center justify-center flex text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 text-gray-400 leading-relaxed ">Our Mission
        </h1>
        <div className="flex gap-10 justify-evenly items-center">
      <p className="w-[30%]">Our mission is to inspire and nurture a lifelong love of reading in every individual. We carefully curate our collection to offer a diverse range of genres, voices, and perspectives, ensuring that every reader finds something that resonates with them. Beyond just selling books, we host events, author signings, and reading groups, fostering a community where literature is celebrated and shared.</p>
      <img className="max-w-96 rounded-xl" src={mission}/>
        </div>
    </div>
  )
}
