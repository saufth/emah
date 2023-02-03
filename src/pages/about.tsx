// Components
import About from '../components/sections/About'
import SmoothLayout from '../components/layout/SmoothLayout'
import Footer from '../components/sections/Footer'
import Header from '../components/sections/Header'
// Types
import { AboutProps } from '../types/sections'
// Styles
import styles from '../styles/pages/AboutPage.module.css'

/** About page configuration */
const aboutConfig: AboutProps = {
  description: 'Te presentamos nuestra estrategia de trabajo, el como ejecutamos nuestros dia a dia. Estos aspectos forman parte de nuestro ADN y son clave en la generación de valor para nuestros clientes.',
  showcases: [
    {
      heading: 'Trabajamos en equipo',
      descriptions: [
        'Filosofía: Los negocios son opuestos a las matemáticas. Mientras que las matemáticas plantean que la mejor forma de sumar es multiplicar, los negocios, la mejor forma de sumar es dividir. Dividir el esfuerzo, el trabajo, las tareas y hasta los ingresos.',
        'Mas allá de querer ser un experto en todas las áreas de una empresa o negocio, busca rodearte de un equipo de expertos que complemente correctamente las habilidades y conocimientos que no tienes.'
      ],
      image: 'team'
    },
    {
      heading: 'Innovamos constantemente',
      descriptions: [
        'Lo importante es generar innovación alrededor de lo que el cliente considera valioso.',
        'Para lograr generar innovaciones de valor es imperativo conocer al cliente, a la competencia, al mercado y a ti mismo como organización.'
      ],
      image: 'innovate'
    },
    {
      heading: 'Transformamos problemas en oportunidades',
      descriptions: [
        'Problemas = áreas de oportunidad.',
        'Mientras más grande y frecuente sea el problema, mayor será la posibilidad de generar valor.',
        'La creatividad es un elemento clave en nuestro proceso de encontrar soluciones.'
      ],
      image: 'oportunity'
    },
    {
      heading: 'No asumimos',
      descriptions: [
        'Se debe tener certeza en cada tarea u objetivo a realizar. Nunca asumir en caso no tener certeza plena.',
        'Evitar el retrabajo dando indicaciones claras incrementa las probabilidades de que las cosas se hagan bien a la primera.',
        'El estudio de mercado estratégico es un pilar indispensable al momento de tomar decisiones que generen valor para el cliente.'
      ],
      image: 'assume'
    },
    {
      heading: 'Planeamos y ejecutamos con estrategia',
      descriptions: [
        'Se debe analizar y elegir con mucho cuidado la mejor forma de llegar de un punto A (donde estamos) a un punto B (a donde se quiere llegar).',
        'Administrar con eficiencia los recursos disponibles.',
        'Siempre hay una forma óptima o mejor de hacer las cosas.',
        'El minimalismo y la metodología MVP son claves dentro de nuestra estrategia.'
      ],
      image: 'strategy'
    },
    {
      heading: 'Prevemos futuras tendencias',
      descriptions: [
        'Saber cuándo entrar y salir de cualquier oportunidad de negocio. Nada es eterno, todo tiene un ciclo, un punto alto y un punto bajo.',
        'Lo único constante es el cambio. Se tu quien decida los cambios en tu empresa, no el mercado que te obligue a hacerlo.'
      ],
      image: 'prevent'
    },
    {
      heading: 'Buscamos progreso, no perfección',
      descriptions: [
        'El mundo de los negocios es un juego infinito en el que no se tiene certeza plena de todos los elementos que están participando en el mercado ni la variabilidad de los mismos.  A lo máximo que se puede aspirar es a tener estimaciones.',
        '¿Qué sí está en nuestro control? El generar una cultura de progreso constante dentro de nuestra organización, aspirar a ser mejores cada día con relación a nuestras propias métricas e inspirar el cambio a esta cultura de progreso en cada rincón de la compañía.'
      ],
      image: 'progress'
    }
  ]
}

/**
 * About us page
 * @returns AboutPage component
 */
const AboutPage = () => {
  return (
    <SmoothLayout>
      <main>
        <Header>
          El éxito a corto, mediano y largo plazo de cualquier empresa no depende de
          un solo aspecto, sino de la sincronización de muchos hacia el mismo objetivo.
        </Header>
        <div>
          <div className={styles.imageContainer} />
        </div>
        <About {...aboutConfig} />
        <section>
          <div className='max-w-2xl mt-24 md:mt-48 lg:mt-64 mx-auto space-y-6 text-center [&>p]:text-emah-gray'>
            <h2>Problemática y razón de ser</h2>

            <p>
              En el mercado podemos ver muchas historias de éxito, pero muchas más historias de
              fracaso. Dependiendo de cómo analices las estadísticas, podrás encontrar que entre
              8 y 9 de cada 10 emprendimientos terminan cerrando o en banca rota en un periodo no
              mayor a 2 años. Así mismo, para las empresas medianas y grandes, que ya tienen más de
              10 años en el mercado, existe un concepto conocido como “Zombie Companies”, que se
              refiere a aquellas compañías que requieren, para poder subsistir, acceder a préstamos
              o financiamientos y que, además, su nivel de ingresos no es suficiente para cubrir el
              total de sus gastos corrientes.
              <br />
              <br />
              Esto obviamente deriva en una ausencia de pago de utilidades para sus accionistas.
              Es complicado tener un número exacto de cuantas empresas Zombie hay en su totalidad.
              Sin embargo, se estima que entre un 20 - 30% de las compañías en el mundo se encuentran
              en esta situación.
              <br />
              <br />
              Algunos ejemplos son: BlockBuster, BlackBerry, Sears, El Globo, AMC, GameStop, Kodak, WeWork, Carnival Cruise Lines.
              Sí, aunque no lo creas, todas estas empresas, hoy se encuentran quebradas o con altas posibilidades de terminar en banca rota en un corto-mediano plazo
            </p>

            <h3>Pero ¿qué tienen en común todas ellas?</h3>

            <p>
              Que alguna vez estuvieron en la cima de sus respectivos giros comerciales.
              Sin embargo, no lograron consolidarse en el mercado y hoy simplemente pasaran
              a la historia como una empresa más.
            </p>

            <h3>¿Y qué tiene que ver todo esto con el marketing?</h3>

            <p>
              La respuesta es que, todas estas empresas no previeron lo que se venía y se aferraron
              a sus modelos de negocio arcaicos. Decidieron que lo que ellos pensaban era más
              importante que lo que el cliente piensa, quiere y/o necesita. Y, como mencionamos
              previamente, lo único constante es el cambio, algo que no tomaron en cuenta, por lo
              que el mercado tuvo que seguir su curso natural y decidir por ellos.
              <br />
              <br />
              Justamente evitar que pases por la misma suerte que estas empresas es nuestro gran
              combustible y razón de ser. Sabemos que para ello se requiere un conocimiento profundo
              del mercado y del cliente, capacidad para prever y anticipar tendencias, así como una
              estrategia a la medida de tus necesidades y las de tu cliente. Todo esto y mucho más
              es lo que podemos y queremos hacer por ti.
              <br />
              <br />
              Hoy en día, y no me dejarán mentir, conseguir que el marketing genere resultados
              reales y tangibles es un gran reto. En muchas ocasiones, más que una campaña armada
              y bien pensada, se ha vuelto un juego de utilizar a gente visualmente “atractiva” y/o
              supuestos “influencers” para intentar posicionar las marcas e incrementar las ventas.
              <br />
              <br />
              Sin embargo, en muchas ocasiones, lo máximo que se alcanza es un incremento de
              seguidores, que no necesariamente se ve reflejado en ventas, que es el verdadero
              objetivo de una campaña de este tipo.
              <br />
              <br />
              En EMAH tenemos como propósito que tu empresa se pueda distinguir más allá de estas
              campañas y que tu producto o servicio se distinga en el mercado por generar valor para
              los clientes más allá de un bajo precio. Es más, ahí te va un spoiler: Si tu idea para
              competir en el mercado está pensada solo en el precio, es muy probable que tu empresa
              no dure mucho. La máxima de todas las empresas debe ser el formar una cultura y que
              esta se vuelva parte de la vida de sus clientes.
              <br />
              <br />
              Permítenos formar parte de tu equipo. Queremos impulsar tu empresa para que se
              transforme en un legado para ti, para tu familia y tus seres queridos.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </SmoothLayout>
  )
}

export default AboutPage
