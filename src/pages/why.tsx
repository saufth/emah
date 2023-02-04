// Components
import SmoothLayout from '../components/layout/SmoothLayout'
import Footer from '../components/sections/Footer'
// Styles
import styles from '../styles/pages/WhyPage.module.css'

/**
 * Why page
 * @returns WhyPage component
 */
const WhyPage = () => {
  return (
    <SmoothLayout>
      <main>
        <section>
          <div className={styles.content}>
            <h1>Razón de ser</h1>

            <p>
              En el mercado podemos ver muchas historias de éxito, pero también historias de
              fracaso. Dependiendo de cómo analices las estadísticas, podrás encontrar que entre
              8 y 9 de cada 10 emprendimientos terminan cerrando o en banca rota durante un periodo
              no mayor a 2 años. Así mismo, para las empresas medianas y grandes, que ya tienen más
              de 10 años en el mercado, existe un concepto conocido como “zombie companies”, el
              cual se refiere a aquellas compañías que requieren, para poder subsistir, acceder a
              préstamos o financiamientos, y que, además, su nivel de ingresos no es suficiente
              para cubrir el total de sus gastos corrientes. Esto obviamente deriva en una ausencia
              de pago de utilidades para sus accionistas.
              <br />
              <br />
              Es complicado tener un número exacto de cuántas empresas “zombie” hay en total. Sin embargo,
              se estima que entre un 20 y 30 % de ellas en el mundo se encuentran en esta situación.
              <br />
              <br />
              Algunos ejemplos son: BlockBuster, BlackBerry, Sears, El Globo, AMC, GameStop, Kodak, WeWork,
              Carnival Cruise Lines, entre otras.
              <br />
              <br />
              Sí, aunque no lo creas, todas estas empresas hoy se encuentran quebradas o con altísimas
              posibilidades de terminar en banca rota en un corto o mediano plazo.
            </p>

            <h2>Pero ¿qué tienen en común todas ellas?</h2>

            <p>
              Que alguna vez estuvieron en la cima de sus respectivos giros comerciales. Sin embargo,
              no lograron consolidarse en el mercado y hoy simplemente pasarán a la historia como una
              empresa más, lejos de ser la que alguna vez fueron.
            </p>

            <h2>¿Y qué tiene que ver todo esto con el marketing?</h2>

            <p>
              La respuesta es que todas estas empresas no previeron lo que se venía y se aferraron a sus
              modelos arcaicos de negocio. Decidieron que lo que ellos pensaban era más importante que
              aquello que el cliente quería o necesitaba. Y puesto que, como lo mencionamos previamente,
              lo único constante es el cambio, fue algo que no tomaron en cuenta, por lo que el mercado
              tuvo que seguir su curso natural y decidir por ellos.
              <br />
              <br />
              Evitar que pases por la misma suerte que estas empresas es justamente nuestro gran combustible
              y razón de ser. Sabemos que para ello se requiere de un conocimiento profundo del mercado y
              del cliente, de capacidad para prever y anticipar tendencias, así como una estrategia a la
              medida de tus necesidades y las de tu cliente. Todo esto y mucho más es lo que podemos y
              queremos hacer por ti.
              <br />
              <br />
              Hoy en día, y no me dejarán mentir, conseguir que el marketing genere resultados reales y
              tangibles es un gran reto. En muchas ocasiones, más que una campaña armada y bien pensada,
              se ha vuelto un juego utilizar gente visualmente “atractiva” y/o supuestos “influencers” para
              intentar posicionar las marcas e incrementar las ventas. Sin embargo, en muchas ocasiones, lo
              máximo que se alcanza es un incremento de seguidores, que no necesariamente se ve reflejado en
              ventas, que es el verdadero objetivo de una campaña de este tipo.
              <br />
              <br />
              En EMAH tenemos como propósito que tu empresa se pueda reconocer por encima de estas campañas
              y que tu producto o servicio se distinga en el mercado por generar valor para los clientes,
              más allá de un bajo precio. Es más, aquí te dejamos un spoiler: Si tu idea para competir en el
              mercado está pensada solo en el precio, es muy probable que tu empresa no dure mucho. La
              máxima de todas las empresas debe ser el formar una cultura y que esta se vuelva parte de la
              vida de sus clientes.
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

export default WhyPage
