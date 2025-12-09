import { motion } from 'framer-motion'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function Home() {
  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback se o vídeo não carregar
            const target = e.target as HTMLVideoElement
            target.style.display = 'none'
          }}
        >
          <source src="/videos/bannervideo.mp4" type="video/mp4" />
        </video>
        {/* Overlay com sombra leve */}
        <div className="absolute inset-0 bg-[#0C0A09]/80 backdrop-blur-[1px]"></div>
        {/* Sombra de baixo para cima no fim do vídeo */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0C0A09] via-[#0C0A09]/60 to-transparent"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#DD9E32] text-sm md:text-base uppercase tracking-[0.2em] font-body mb-6"
          >
            LUXEMBOURG CITY
          </motion.p>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-2">
              REDEFINING
            </h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-gray-300">
              MASCULINITY
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white text-base md:text-lg lg:text-xl font-body max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Experience the art of grooming in an urban-premium setting. Precision cuts, traditional shaves, and a style that speaks confidence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="https://salonkee.lu/salon/men-s-concept-barber-shop"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-[#DD9E32] text-white uppercase tracking-wider font-heading font-bold rounded-lg flex items-center gap-3 hover:bg-[#C88A1F] transition-all shadow-lg shadow-[#DD9E32]/30 hover:shadow-xl hover:shadow-[#DD9E32]/40"
            >
              <span className="text-lg md:text-xl">BOOK APPOINTMENT</span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="relative">
              {/* Círculo com blur de fundo */}
              <div className="absolute inset-0 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"></div>
              <motion.svg
                className="relative w-6 h-6 text-white z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    
    {/* Gallery Section */}
    <Gallery />

    {/* Testemunhos Modernos */}
    <section className="relative z-10 py-20 bg-[#0C0A09] overflow-hidden before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-[#0C0A09] before:to-transparent before:z-20 after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-[#0C0A09] after:to-transparent after:z-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
          >
            Meet our happy clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-body mb-8"
          >
            All of our 1000+ clients are happy
          </motion.p>
        </div>

        {/* Testimonials - Top Row (moves right) */}
        <div className="mb-6 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {[
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "John Doe",
                role: "Developer",
                initials: "JD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "John Doe",
                role: "CEO & Founder",
                initials: "JD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "Jane Doe",
                role: "CTO",
                initials: "JD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "John Smith",
                role: "COO",
                initials: "JS",
              },
            ].map((testimonial, index) => (
              <div key={`top-${index}`} className="flex-shrink-0 w-[280px]">
                <Card className="shadow-lg rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                  <CardContent className="flex flex-col gap-4 p-0">
                    <p className="text-white/70 leading-relaxed font-body text-sm">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/avatar${index + 1}.jpg`} />
                        <AvatarFallback className="bg-white/10 text-white font-heading font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-heading font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-white/60 font-body">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "John Doe",
                role: "Developer",
                initials: "JD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "John Doe",
                role: "CEO & Founder",
                initials: "JD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "Jane Doe",
                role: "CTO",
                initials: "JD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "John Smith",
                role: "COO",
                initials: "JS",
              },
            ].map((testimonial, index) => (
              <div key={`top-dup-${index}`} className="flex-shrink-0 w-[280px]">
                <Card className="shadow-lg rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                  <CardContent className="flex flex-col gap-4 p-0">
                    <p className="text-white/70 leading-relaxed font-body text-sm">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/avatar${index + 1}.jpg`} />
                        <AvatarFallback className="bg-white/10 text-white font-heading font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-heading font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-white/60 font-body">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials - Bottom Row (moves left) */}
        <div className="mb-12 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {[
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "Richard Doe",
                role: "Designer",
                initials: "RD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "Gordon Doe",
                role: "Developer",
                initials: "GD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "John Doe",
                role: "CEO & Founder",
                initials: "JD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "Jane Doe",
                role: "CTO",
                initials: "JD",
              },
            ].map((testimonial, index) => (
              <div key={`bottom-${index}`} className="flex-shrink-0 w-[280px]">
                <Card className="shadow-lg rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                  <CardContent className="flex flex-col gap-4 p-0">
                    <p className="text-white/70 leading-relaxed font-body text-sm">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/avatar${index + 5}.jpg`} />
                        <AvatarFallback className="bg-white/10 text-white font-heading font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-heading font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-white/60 font-body">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "Richard Doe",
                role: "Designer",
                initials: "RD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "Gordon Doe",
                role: "Developer",
                initials: "GD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "John Doe",
                role: "CEO & Founder",
                initials: "JD",
              },
              {
                text: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? lusto id ut omnis repellat.",
                name: "Jane Doe",
                role: "CTO",
                initials: "JD",
              },
            ].map((testimonial, index) => (
              <div key={`bottom-dup-${index}`} className="flex-shrink-0 w-[280px]">
                <Card className="shadow-lg rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                  <CardContent className="flex flex-col gap-4 p-0">
                    <p className="text-white/70 leading-relaxed font-body text-sm">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/avatar${index + 5}.jpg`} />
                        <AvatarFallback className="bg-white/10 text-white font-heading font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-heading font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-white/60 font-body">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Add Comment Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#DD9E32] text-white font-heading font-bold rounded-lg hover:bg-[#C88A1F] transition-colors shadow-lg shadow-[#DD9E32]/30 hover:shadow-xl hover:shadow-[#DD9E32]/40"
          >
            Add a Comment
          </motion.button>
        </motion.div>
      </div>
    </section>
    </>
  )
}
