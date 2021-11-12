import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import LinaHernandez from "./images/LinaHernandez.jpeg"
import YeinerOrtiz from "./images/pp.jpg"

const Contact = () => {
    return (
        <div className="contac-team">
            <Stack direction="row" spacing={2}>
               <div>
               <Avatar alt="Milton Riscanevo" src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.18169-9/14265101_10154158041188197_5171582230870274048_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=M83OdII9zHUAX-84Ab6&tn=riurFC4p9DA7sm4X&_nc_ht=scontent-bog1-1.xx&oh=f6d819635a79fc249c3dc528da829204&oe=61B368A9" />
               <ul className="socialnet">
                   <li className="socialnet">
                       <FontAwesomeIcon icon={faFacebook} className="colornet"/>
                       <a href="https://www.facebook.com/inocencio1986" className="socialnet socialcolor">milton</a>
                   </li>
               </ul>
               </div>

               <div>
               <Avatar alt="Hernan hernandez" src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/168945515_3019314438302102_2887580117172334194_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEdXZMbzAUnMtc5Lh70b5MonjUJejlBffaeNQl6OUF99oV4h2_5aqlVK2D7Gukkh13c0zh2ujC5McjV6zYo2FA8&_nc_ohc=J4DSdg3juYoAX8HqxAd&_nc_ht=scontent-bog1-1.xx&oh=02fa1262e95d080b8afbe2c6d440c9a4&oe=61B5B835" />
               <ul className="socialnet">
                   <li className="socialnet">
                       <FontAwesomeIcon icon={faFacebook} className="colornet"/>
                       <a href="https://www.facebook.com/hernandaniel.hernandezmejia" className="socialnet socialcolor">Hernan Hernandez</a>
                   </li>
               </ul>
               </div>

               <div>
               <Avatar alt="Jesus Diaz" src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/245771425_4477997192279405_3614596936646813030_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHeVrEcsDD_2K08txr4y9ps7EG-9PtuyObsQb70-27I5obNP_6kX0Gc8WrsWE7lcWbcy_9Msn4_ijANe-ZHnrxo&_nc_ohc=X-D22ySfUqkAX_du7T3&_nc_ht=scontent-bog1-1.xx&oh=208cb25c6b0f5642438fcf764a3d1ba7&oe=619365DA" />
               <ul className="socialnet">
                   <li className="socialnet">
                       <FontAwesomeIcon icon={faFacebook} className="colornet"/>
                       <a href="https://www.facebook.com/josednu" className="socialnet socialcolor">Jesus Diaz</a>
                   </li>
               </ul>
               </div>

               <div>
               <Avatar alt="Lina Hernandez" src={LinaHernandez} />
               <ul className="socialnet">
                   <li className="socialnet">
                       <FontAwesomeIcon icon={faFacebook} className="colornet"/>
                       <a href="https://www.facebook.com/shanymalu.hernandezganan" className="socialnet socialcolor">Lina Hernandez</a>
                   </li>
               </ul>
               </div>
               <div>
               <Avatar alt="Yeiner Ortiz" src={YeinerOrtiz} />
               <ul className="socialnet">
                   <li className="socialnet">
                       <FontAwesomeIcon icon={faFacebook} className="colornet"/>
                       <a href="https://www.facebook.com/media/set/?set=a.106595426625836&type=3" className="socialnet socialcolor">Yeiner Ortiz</a>
                   </li>
               </ul>
               </div>
               
               <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
               <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Stack>
        </div>
    )
}

export default Contact
