import onebed from '../images/one-bedroom-mdawida.png';
import bedsitter from '../images/single-room-mdawida.png';

const Rooms = () => (
  <>
    <div className="rooms-container">
      At Mdawida Homestay, we offer a range of comfortable and well-appointed rooms designed
      to cater to your individual needs. Whether you&apos;re traveling alone, as a couple, or with a
      small group, our studio and one-bedroom ensuite accommodations provide a
      cozy and inviting space to relax and unwind.
      Our studio rooms are thoughtfully designed to maximize space and functionality.
      Featuring a combined
      living and sleeping area, these rooms are perfect for solo travelers or couples seeking a
      cozy retreat.
      Enjoy the convenience of a well-equipped kitchenette, where you can prepare light
      meals or brew a cup of coffee to start your day. Each studio room is furnished with
      comfortable bedding, modern amenities, and a private bathroom, ensuring a restful
      and enjoyable stay.
      For those seeking a bit more space and privacy, our one-bedroom ensuite rooms
      are the perfect choice. These well-appointed accommodations feature a separate bedroom,
      providing an extra level of privacy and comfort. Unwind in the spacious living area,
      complete with a cozy seating arrangement and a dining table for intimate meals.
      The fully equipped kitchen allows you to prepare your own meals at your convenience.
      Each one-bedroom ensuite room boasts a private bathroom, ensuring a seamless and convenient
      stay.

      <ul className="rooms-list">
        <h2>accommodation options</h2>
        <li>
          <h3>one bedroom studio</h3>
          <img src={onebed} alt={onebed} className="one-bed" />
          <p>
            This is your little home away from Home, we have made it into a cozy nest just for you.
            It has a private entrance with a secured door.
            We have all the amenities, to help your stay becomes a memorable one.
            A Kitchenette for all those delicious home cooked meals you want to prepare!!!
            Also included:
            Wireless and fast internet
            Television
            Private entrance
            Looking forward to having you here.
            COSTS:
            Single:USD25
            Double:USD40
            Discounts are available for
            stays than one week!!!!
            PLEASE NOTE: PRIOR BOOKING IS MANDATORY, WE DO NOT TAKE WALK IN CLIENTS
          </p>
        </li>
        <li>
          <h3>private en-suite room</h3>
          <img src={bedsitter} alt={bedsitter} className="single-room" />
          <p>
            This lovely room is compact, but has everything you would need. Ideal for
            singles or couples,
            we provide everything to make your stay memorable.
            A Kitchenette for all those delicious home cooked meals you want to prepare!!!
            Also included:
            Wireless and fast internet
            Television
            Private entrance
            Looking forward to having you here.
            COSTS:
            Single:USD20
            Double:USD32
            Discounts are available for
            stays than one week!!!!
            PLEASE NOTE: PRIOR BOOKING IS MANDATORY, WE DO NOT TAKE WALK IN CLIENTS
          </p>
        </li>
      </ul>
    </div>

  </>
);

export default Rooms;
