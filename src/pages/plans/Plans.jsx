import Header from '../../components/Header';
import HeaderImage from "../../images/back7.jpg";
import Card from "../../UI/Card";
import { plans } from '../../data';
import './plans.css';

const Plans = () => {
  return (
    <>
    <Header image={HeaderImage} title="Plans">
      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumv
    </Header>
    <section className="plans">
      <div className="container plans_container">
        {
          plans.map(({id, name, desc, price, features}) =>
          {
            return <Card key={id} className="plans">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map(({feature, available}, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              }
              <button className="btn lg">Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans