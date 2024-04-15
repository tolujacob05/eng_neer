import vid1 from "../img/vid1.mp4";
import Article from "./Article.js";
import Image from "./Image";
import { motion, useScroll, useSpring } from "framer-motion";
import "../App.css";
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";
import pic4 from "../img/pic4.jpg";
import pic5 from "../img/pic5.jpg";
import pic6 from "../img/pic6.jpg";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="big-cont">
      <nav className="big-nav">
        <div className="vid">
          <header>
            <h1>MAYOWA AKINJARE</h1>
            <p>TOPIC: PROPOSED FIVE FLOOR RESIDENTIAL APARTMENT PROJECT </p>
          </header>
          <video src={vid1} autoPlay loop muted />
          <div className="title">
            <h1>
              Exquisite taste and creativity define the world of construction.
            </h1>
          </div>
        </div>
      </nav>
      <section className="big-section">
        <div className="container">
          <motion.div className="progress-bar" style={{ scaleX }} />
          <Article />
          <Image />

          <div className="whole">
            <div className="point-1">
              <img src={pic2} alt="" />
              <div className="point">
                <h3>Internet of Things IoT</h3>
                <p>
                  The residential apartment project leverages IoT technologies
                  to enhance construction processes and building performance.
                  Sensors embedded in structural elements monitor material
                  condition and enable real-time tracking of issues. RFID tags
                  and GPS track construction assets to optimize logistics and
                  workflows. Environmental sensors collect data on energy,
                  water, air quality, and noise levels to verify sustainability
                  targets. The IoT data feeds into a centralized platform for
                  analysis and visualization, allowing the project team to make
                  data-driven decisions. Key challenges include ensuring
                  reliable connectivity, integrating heterogeneous data sources,
                  and addressing cybersecurity concerns. By harnessing IoT, the
                  project can improve productivity, quality, and
                  environmental performance.
                </p>
              </div>
            </div>

            <div className="point-1">
              <div className="point">
                <h3> AI Application</h3>
                <p>
                  The residential apartment project utilizes AI techniques in
                  several critical areas. Predictive analytics models analyze
                  construction data to forecast potential risks, such as
                  schedule delays and budget overruns, enabling proactive
                  mitigation. AI-powered predictive maintenance algorithms
                  forecast the remaining life of building systems, informing a
                  preventative maintenance approach to minimize downtime and
                  costs. Computer vision and robotic automation are employed to
                  streamline construction tasks, improving productivity and
                  worker safety. However, the project team must address ethical
                  considerations around algorithmic transparency, data privacy,
                  and algorithmic bias. By judiciously applying AI, the project
                  can optimize processes, enhance building performance, and
                  deliver greater value to stakeholders.
                </p>
              </div>
              <img src={pic3} alt="" />
            </div>

            <div className="point-1">
              <img src={pic4} alt="" />
              <div className="point">
                <h3> Big Data Analytics and Visualization </h3>
                <p>
                  The residential apartment project will generate extensive data
                  from BIM models, IoT sensors, construction logs, and building
                  management systems. The project team leverages big data
                  analytics techniques to extract valuable insights. Predictive
                  analytics models forecast construction progress and resource
                  demands, while prescriptive analytics optimize workflows,
                  procurement, and workforce allocation. Interactive dashboards
                  and visualizations communicate complex project information,
                  enabling data-driven decisions. By transforming raw data into
                  actionable intelligence, the team can improve productivity,
                  reduce waste, and enhance overall project performance. Key
                  challenges include integrating data from disparate sources,
                  ensuring data quality, and developing robust analytical models
                  to handle the scale and complexity of construction data.
                </p>
              </div>
            </div>

            <div className="point-1">
              <div className="point">
                <h3> Smart Materials Integration and Implementation</h3>
                <p>
                  The residential apartment project incorporates innovative
                  smart materials to enhance the building's performance and
                  sustainability. Self-healing concrete with microencapsulated
                  healing agents automatically seals cracks, improving
                  structural integrity. Thermochromic windows dynamically adjust
                  transparency to optimize passive heating and cooling, reducing
                  energy consumption. Piezoelectric floor tiles generate
                  renewable electricity from foot traffic, contributing to the
                  building's power supply. While these smart materials offer
                  significant benefits, the project team must address challenges
                  such as higher initial costs, limited availability, and
                  potential integration issues with conventional construction
                  methods. By carefully evaluating the tradeoffs, the team can
                  leverage smart materials to create a more resilient,
                  energy-efficient, and environmentally-conscious
                  residential development.
                </p>
              </div>
              <img src={pic5} alt="" />
            </div>

            <div className="point-1">
              <img src={pic6} alt="" />
              <div className="point">
                <h3> Plan and Cost-Benefit Analysis</h3>
                <p>
                  The comprehensive Smart Construction Implementation Plan for
                  the residential apartment project outlines a phased approach
                  to deploying the selected digital technologies. Key components
                  include clearly defined project objectives, a roadmap for
                  technology integration, strategies for change management and
                  risk mitigation, and a system for monitoring and optimization.
                  Alongside the implementation plan, the project team conducts a
                  detailed cost-benefit analysis. This analysis considers both
                  the initial capital expenditures and the long-term operational
                  savings and benefits, such as reduced construction waste,
                  improved worker productivity, lower energy costs, and enhanced
                  building value. By demonstrating the tangible and intangible
                  advantages, the cost-benefit analysis provides a robust
                  business case to secure stakeholder buy-in.
                </p>
              </div>
            </div>
          </div>

          <h3>Conclusion</h3>
          <p>
            This five-floor residential apartment project aims to create a
            smart, sustainable, and high-quality living environment by
            integrating advanced digital construction technologies. Leveraging
            IoT sensors, AI algorithms, big data analytics, and innovative smart
            materials, the project optimizes construction processes, building
            performance, and facility management. The strategic location
            addresses the region's housing needs, while the digital applications
            align with municipal sustainability goals. The comprehensive
            implementation plan and cost-benefit analysis provide a robust
            framework to deploy these transformative solutions. This project
            serves as a benchmark for innovative and livable residential
            development, showcasing the potential of digital construction to
            enhance quality of life and environmental stewardship.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
