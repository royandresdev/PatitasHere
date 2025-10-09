import { Icon } from "@iconify/react";

export function FooterWithSitemap() {
  return (
    <footer className="container bg-primary text-white p-4">
      {/* Sitemap */}
      <div className="grid grid-cols-2 gap-3 pb-4">
        <div className="space-y-2 py-2">
          <h2 className="text-xl! font-bold mb-2">PatitasHere</h2>
          <p>En PatitasHere conectamos corazones con patas. Ayudamos a encontrar el hogar perfecto para cada mascota.</p>
          <div className="flex gap-2">
            <Icon icon="iconoir:facebook" className="text-2xl text-white" />
            <Icon icon="mdi:instagram" className="text-2xl text-white" />
            <Icon icon="line-md:twitter" className="text-2xl text-white" />
          </div>
        </div>
        <div className="space-y-2 py-2">
          <h3 className="text-white!">Enlaces rápidos</h3>
          <ul>
            <li>Adoptar</li>
            <li>Donar</li>
            <li>Voluntariado</li>
            <li>Refugios</li>
          </ul>
        </div>
        <div className="space-y-2 py-2">
          <h3 className="text-white!">Soporte</h3>
          <ul>
            <li>Centro de ayuda</li>
            <li>Contacto</li>
            <li>Términos y condiciones</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
        <div className="space-y-2 py-2">
          <h3 className="text-white!">Contacto</h3>
          <ul>
            <li className="flex items-center gap-2"><Icon icon="material-symbols:mail-outline" /> info@patitashere.com</li>
            <li className="flex items-center gap-2"><Icon icon="tabler:phone" /> +54 9 11 1234 5678</li>
            <li className="flex items-center gap-2"><Icon icon="mingcute:location-line" /> Buenos Aires, Argentina</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-sm pt-4 mb-4">© 2025 PatitasHere. Todos los derechos reservados.</p>
      <p><Icon icon="mdi:heart-outline" className="inline-block text-secondary text-2xl" /> Hecho con amor para las mascotas por <strong>RoyAndresDev</strong></p>
    </footer>
  )
}
