import React, { useState } from "react";
import Modal from "react-modal";

const TermsAndConditionsModal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(2); 

  // Función para ir a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Función para ir a la página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="Modal">
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-xl text-center font-bold mb-4 text-custom-blue">
              Términos y condiciones aceptados al completar el formulario de inscripción del jugador/a 

            </h2>
            <div className="border-b border-yellow-d mb-4"></div>
            <div className="text-center">
            <p className="mb-2">
              Página {currentPage} de {totalPages}
            </p>
            </div>
        
            {currentPage === 1 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  CLÁUSULA INFORMATIVA DE PROTECCION DE DATOS PARA JUGADORES/AS
                </h3>
                <p className="text-sm text-gray-500">
  De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016,
  con el <span className="font-bold">C.D. CIUDAD LOS ANGELES</span> con C.I.F. G86089588 como responsable de tratamiento,
  y domiciliado en la calle Alianza nº4 (28041) (PDM FELIX RUBIO) de Madrid, le informa que los datos que nos ha proporcionado
  formarán parte de un registro de datos acorde a su edad, denominado <span className="font-bold">JUGADORES/AS</span> o 
  <span className="font-bold">JUGADORES/AS MENORES</span>, ambos titularidad del <span className="font-bold">C.D. CIUDAD LOS ANGELES</span>.<br /><br />
  
  <span className="font-bold">Responsable de Tratamiento:</span> C.D. CIUDAD LOS ANGELES.<br />
  <span className="font-bold">C.I.F:</span> G86089588<br />
  <span className="font-bold">Dirección:</span> C/ Alianza nº4 (28041) (PDM FELIX RUBIO) de Madrid.<br />
  <span className="font-bold">Teléfono:</span> +34 638 71 00 26<br />
  <span className="font-bold">Correo electrónico:</span> cdciudaddelosangeles@hotmail.com<br />
  <span className="font-bold">Nº Inscripción Federación:</span> 4427<br />
  <span className="font-bold">Nº Inscripción Comunidad de Madrid:</span> 3145<br /><br />
  
  C.D. CIUDAD LOS ANGELES le garantiza la protección de todos los datos de carácter personal facilitados y, en cumplimiento
  de los dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo
  a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación
  de estos datos y por el que se deroga la Directiva 95/46/CE y restante normativa de aplicación le informa que:<br /><br />
  
  <span className="block mt-2">a) Todos los datos de carácter personal facilitados al C.D. CIUDAD LOS ANGELES serán tratados por éste de acuerdo con las prescripciones legales aplicables al respecto y quedarán registrados bajo la responsabilidad del C.D. CIUDAD LOS ANGELES para la prestación a sus jugadores/as de los servicios en las siguientes áreas:</span>
  - Oferta deportiva Educativa.<br />
  - Apoyar y fomentar la formación de los jóvenes a través del deporte.<br />
  - Divulgar actividades deportivas y educativas.<br />
  - Fomentar el desarrollo del deporte y su función educativa en todos los ámbitos.<br />
  - Tratamos la información que nos facilitan las personas interesadas con el fin de formar parte como jugador/a menor de las diferentes categorías.<br />
  - Gestión de altas y bajas del C.D. CIUDAD LOS ANGELES.<br /><br />
  
  <span className="block mt-2">b) La base jurídica de ese tratamiento es la de gestionar los datos de carácter personal de los jugadores/as y en el caso de jugadores/as menores de sus padres, tutores o representantes legales, para TODAS LAS FINALIDADES RELACIONADAS CON LA PRÁCTICA DEL FÚTBOL EN LOS EQUIPOS DEL C.D. CIUDAD LOS ANGELES Y TODAS LAS NECESARIAS SEGÚN LO DEFINIDO POR EL C.D. CIUDAD LOS ANGELES ACTIVIDADES Y TRATAMIENTOS RELACIONADOS CON PARTICIPACIONES EN TORNEOS DE LA FEDERACIÓN, ASÍ COMO PARA LA RESOLUCIÓN DE ASUNTOS RELACIONADOS CON LA GESTION DEL C.D. CIUDAD LOS ANGELES.</span><br />
  
  <span className="block mt-2">c) La legitimación del tratamiento está basada en el consentimiento del interesado que podrá retirar en cualquier momento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</span><br />
  
  <span className="block mt-2">d) Los datos de carácter personal serán incorporados en un registro de datos y podrán ser cedidos a la CONSEJERÍA DE EDUCACIÓN, ADMINISTRACIÓN TRIBUTARIA, BANCOS/CAJAS DE AHORRO, ENTIDADES ASEGURADORAS, ENTIDADES SANITARIAS, ASESORÍAS Y A LA FEDERACIÓN siempre y cuando dichas cesiones se realicen para las mismas finalidades que las establecidas en el párrafo anterior, lo que usted acepta expresamente.</span><br />
  
  <span className="block mt-2">e) Los datos personales tratados se conservarán en todo caso mientras sean necesarios para la finalidad del tratamiento y se suprimirán a solicitud del interesado, o una vez finalizado el tratamiento sin perjuicio de su conservación por los plazos establecidos por la Normativa Vigente.</span><br />
  
  <span className="block mt-2">f) Le comunicamos que no realizaremos transferencia internacional de datos.</span><br />
  
  <span className="block mt-2">g) Usted podrá, en todo momento, ejercitar los derechos de acceso, rectificación, portabilidad, supresión y oposición sobre sus datos personales, así como el de revocación del consentimiento para cualquiera de las finalidades antes señaladas, enviando al C.D. CIUDAD LOS ANGELES carta debidamente firmada a la dirección calle Alianza nº4 (28041) (PDM FELIX RUBIO) de Madrid, donde consten claramente los datos de contacto, a la cual deberá acompañarse fotocopia de su DNI/NIF o documento que acredite su identidad o a la dirección de email: cdciudaddelosangeles@hotmail.com</span><br />
  
  <span className="block mt-2">h) En caso de considerar vulnerado su derecho a la protección de datos, le informamos de que tiene derecho a presentar una reclamación ante la autoridad de control Agencia Española de Protección de Datos (www.aepd.es).</span><br />
  
  <span className="block mt-2">i) Al completar el formulario e inscripción <span className="text-yellow-d font-bold">USTED AUTORIZA</span> al C.D. CIUDAD LOS ANGELES al tratamiento AUTOMATIZADO/ NO AUTOMATIZADO de sus datos de carácter personal, al establecimiento de comunicaciones y todo ello de conformidad con lo establecido en los párrafos anteriores.</span><br />
  
  <span className="block mt-2">j) En el caso de padres divorciados, puesto que se considera (generalmente) que la patria potestad la comparten ambos progenitores, el consentimiento para el tratamiento de los datos del menor debe darse por parte de ambos padres.</span><br />
</p>

<div className="text-center">
  <button
    onClick={nextPage}
    className="bg-custom-blue hover:bg-blue-700 text-yellow-d font-bold py-2 px-4 rounded mt-4"
  >
    Siguiente
  </button>
</div>
               
              </div>
            )}
            {currentPage === 2 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Autorización para el uso de imágenes de los jugadores/as en la web y en las redes sociales de C.D Ciudad de los Angeles.
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
  En cumplimiento de lo previsto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016,
  y dado que el derecho a la propia imagen está reconocido en el artículo 18 de la Constitución y regulado por la Ley 1/1982,
  de 5 de mayo, sobre el derecho al honor, a la intimidad personal y familiar y a la propia imagen, le informamos que las
  imágenes captadas por el <span className="font-bold">C.D. CIUDAD LOS ANGELES</span> con C.I.F. G86089588 como Responsable de Tratamiento,
  con la finalidad de ofrecer algunas de esas fotografías y videos a través del sitio web, así como de las redes sociales
  del <span className="font-bold">C.D. CIUDAD LOS ANGELES</span> como motivo de recuerdo de la estancia de los jugadores/as y promoción de las
  diferentes actividades desarrolladas en el <span className="font-bold">C.D. CIUDAD LOS ANGELES</span>, serán almacenadas en el registro de datos,
  acorde a su edad, denominado <span className="font-bold">JUGADORES/AS</span> o <span className="font-bold">JUGADORES/AS MENORES</span>, ambos titularidad del
  <span className="font-bold">C.D. CIUDAD LOS ANGELES</span>.<br /><br />

  <span className="font-bold">Responsable de Tratamiento:</span> C.D. CIUDAD LOS ANGELES<br />
  <span className="font-bold">C.I.F:</span> G86089588<br />
  <span className="font-bold">Dirección:</span> C/ Alianza nº4 (28041) (PDM FELIX RUBIO) de Madrid.<br />
  <span className="font-bold">Teléfono:</span> +34 638 71 00 26<br />
  <span className="font-bold">Correo electrónico:</span> cdciudaddelosangeles@hotmail.com<br /><br />

  Solo se tratarán los datos recogidos con objeto de enviar e informar sobre avisos, eventos, o información relacionada
  con las actividades del club a los miembros y jugadores/as vinculados al mismo. Las imágenes de los jugadores/as o jugadores/as
  menores únicamente se tratarán con la finalidad de ser incluidas en cualquiera de las diversas fotografías y vídeos que se
  tomen en las distintas actividades, partidos, fiestas, y eventos propios del club, durante el tiempo que esté inscrito el jugador/a,
  pudiendo ser expuestas en las redes sociales del club. Siempre respetando que no se dañe la intimidad, la dignidad y el honor
  del jugador/a o jugador/a menor.<br /><br />

  <span className="block font-bold mt-4"><span className="text-yellow-d">Autorizo: </span> USO DE IMÁGENES EN LA PÁGINA WEB DEL CLUB</span><br />
  <span className="font-bold">Finalidad del Tratamiento:</span> las imágenes de los jugadores/as o jugadores/as menores únicamente se tratarán con la finalidad de
  ser incluidas en cualquiera de las diversas fotografías y vídeos que se tomen en las distintas actividades, partidos, fiestas,
  y eventos propios del club, durante el tiempo que esté inscrito el jugador/a, pudiendo ser expuestas en la página web del club.
  Siempre respetando que no se dañe la intimidad, la dignidad y el honor del menor.<br /><br />

  <span className="block font-bold mt-4"><span className="text-yellow-d">Autorizo:</span>  USO DE IMÁGENES EN PLATAFORMA DE STREAMING</span><br />
  <span className="font-bold">Finalidad del Tratamiento:</span> las imágenes de los jugadores/as y jugadores/as menores únicamente se tratarán con la finalidad de
  ser incluidas en las grabaciones y retransmisiones de los partidos captados por la red de videocámaras del campo. Estas serán
  subidas posteriormente a la plataforma de streaming contratada por el club, a la que únicamente tendrán acceso los miembros y
  jugadores/as del club y sus tutores legales.<br /><br />

  <span className="block font-bold mt-4"><span className="text-yellow-d">Autorizo: </span>  INCLUSIÓN EN GRUPO DE WHATSAPP</span><br />
  <span className="font-bold">Finalidad del Tratamiento:</span> los datos recabados únicamente se tratarán para facilitar las comunicaciones entre el cuerpo técnico,
  el club y los jugadores/as y padres o tutores por medio de la aplicación de WhatsApp, por ello requerimos su consentimiento para
  añadirle al grupo creado en dicha plataforma por la organización:<br /><br />

  <span className="font-bold">La base jurídica de estos tratamientos</span> es el propio consentimiento del jugador/a o en su caso del padre/madre o el tutor del menor,
  el cual podrá ser retirado en cualquier momento, sin que ello afecte al legítimo tratamiento realizado hasta dicha fecha. No se
  realizarán cesiones de datos salvo a los encargados de tratamiento que colaboren en la prestación de los servicios relativos a
  las finalidades aquí contempladas. Dichas imágenes serán conservadas por el tiempo exclusivo para dar cumplimiento a las finalidades
  para las que fueron recabadas y mientras no prescriban los derechos que pueda ejercitar contra el responsable, salvo norma que
  disponga un plazo superior lo cual usted autoriza a la firma de este documento.<br /><br />

  Usted podrá, en todo momento, ejercitar los derechos de acceso, limitación de tratamiento, portabilidad, rectificación, cancelación
  y oposición sobre sus datos personales así como la revocación del consentimiento otorgado para cualquiera de las finalidades antes
  señaladas, enviando al <span className="font-bold">C.D. CIUDAD LOS ANGELES</span> carta debidamente firmada a calle Alianza nº4 (28041) (PDM FELIX RUBIO) de Madrid,
  donde consten claramente los datos de contacto a la cual deberá acompañarse fotocopia de su DNI/NIF o documento que acredite su identidad
  o a la dirección de email: cdciudaddelosangeles@hotmail.com.<br /><br />

  Así mismo se le informa que en caso de considerar vulnerado su derecho a la protección de datos, le informamos de que tiene derecho
  a presentar una reclamación ante la autoridad de control <span className="font-bold">Agencia Española de Protección de Datos</span> (www.aepd.es), bien a través de su sede
  electrónica o en su domicilio Calle Jorge Juan 6, Madrid. A través de la firma del presente documento usted presta su consentimiento
  expreso al <span className="font-bold">C.D. CIUDAD LOS ANGELES</span> para el tratamiento de las imágenes de conformidad con los términos y condiciones referidos en los párrafos anteriores.
  En el caso de padres divorciados, puesto que se considera (generalmente) que la patria potestad la comparten ambos progenitores, el
  consentimiento para el tratamiento de los datos del menor debe darse por parte de ambos padres.
</p>

<div className="text-center">
                <button
                  onClick={prevPage}
                  className="bg-custom-blue hover:bg-blue-700 text-yellow-d font-bold py-2 px-4 rounded mt-4 mr-2"
                >
                  Anterior
                </button>
                <button
              onClick={onClose} 
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-d text-base  text-custom-blue font-bold hover:bg-yellow-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue sm:ml-3 sm:w-auto sm:text-sm"
            >
              Entendido
            </button>
                         
              </div>
              </div>
            )}
          
          </div>
        </div>
      </div>
    </div>
    </Modal>
  );
};

export default TermsAndConditionsModal;

