import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Settings2,
  Users2,
  Cloud,
  CheckCircle2,
  ArrowRight,
  FileText,
  Target,
  Truck,
  Building2,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-primary/20">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#5bb99d 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Logística Pública Inteligente
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Ordena tu{" "}
                <span className="text-primary">logística pública</span> de
                principio a fin.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                GRACE es la plataforma SaaS integral diseñada específicamente
                para el sector público peruano. Cumple con normativas vigentes y
                optimiza cada paso del abastecimiento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="h-12 px-8 text-lg bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-200"
                >
                  <a
                    href="http://bit.ly/4sntn0B"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Demo
                  </a>
                </Button>
                <Button
                  onClick={() =>
                    document
                      .getElementById("demo")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  variant="outline"
                  className="h-12 px-8 text-lg border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Ver Credenciales
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="p-1">
                  <img
                    src="/assets/laptop.png"
                    alt="Dashboard Analytics"
                    className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">
                    Cumplimiento
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    Ley de Contrataciones
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. What is GRACE? */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              La Plataforma Integral de Gestión
            </h2>
            <p className="text-lg text-slate-600">
              GRACE es una solución SaaS (Software as a Service) en la nube que
              centraliza, ordena y automatiza la gestión logística de entidades
              públicas, garantizando trazabilidad y transparencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cloud className="w-10 h-10 text-primary" />,
                title: "100% Cloud",
                desc: "Acceda desde cualquier lugar y dispositivo sin instalaciones complejas ni servidores costosos.",
              },
              {
                icon: <Settings2 className="w-10 h-10 text-primary" />,
                title: "Automatización",
                desc: "Reduzca la carga operativa automatizando flujos de aprobación y generación de documentos.",
              },
              {
                icon: <Lock className="w-10 h-10 text-primary" />,
                title: "Seguridad",
                desc: "Sus datos protegidos con los más altos estándares de encriptación y copias de seguridad.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Normative Compliance */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-white">
              Cumplimiento Normativo Garantizado
            </h2>
            <p className="text-slate-300">
              Alineado estrictamente con CEPLAN y la Ley de Contrataciones del
              Estado.
            </p>
          </div>
          <div className="flex gap-6 opacity-80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary w-6 h-6" />
              <span className="font-semibold">CEPLAN</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary w-6 h-6" />
              <span className="font-semibold">OSCE</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary w-6 h-6" />
              <span className="font-semibold">SIGA-MEF</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Problem vs Solution */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-400">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">
                  ✕
                </span>
                Antes de GRACE
              </h3>
              <ul className="space-y-4">
                {[
                  "Procesos manuales y desordenados",
                  "Pérdida de documentación física",
                  "Cuellos de botella en aprobaciones",
                  "Riesgos de observaciones de auditoría",
                  "Desconocimiento del estado real del gasto",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="mr-2 text-red-400 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary transform md:-translate-y-4 md:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-green-100 text-primary flex items-center justify-center mr-3 text-sm">
                  ✓
                </span>
                Con GRACE
              </h3>
              <ul className="space-y-4">
                {[
                  "Flujos digitales automatizados y ordenados",
                  "Repositorio digital centralizado y seguro",
                  "Trazabilidad completa de cada requerimiento",
                  "Alertas preventivas de cumplimiento",
                  "Dashboard gerencial en tiempo real",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. System Modules */}
      <section id="modules" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Módulos del Sistema
            </h2>
            <p className="mt-4 text-slate-600">
              Una suite completa para cada etapa del abastecimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Planeamiento",
                icon: <Target className="w-6 h-6" />,
                desc: "Gestión del POI y Cuadro de Necesidades.",
              },
              {
                title: "Requerimientos",
                icon: <FileText className="w-6 h-6" />,
                desc: "Solicitudes de bienes y servicios por área usuaria.",
              },
              {
                title: "Indagación de Mercado",
                icon: <BarChart3 className="w-6 h-6" />,
                desc: "Cotizaciones y determinación de valor estimado.",
              },
              {
                title: "Ejecución Contractual",
                icon: <Building2 className="w-6 h-6" />,
                desc: "Órdenes de compra, servicio y contratos.",
              },
              {
                title: "Almacén",
                icon: <Truck className="w-6 h-6" />,
                desc: "Control de ingresos, salidas y kárdex.",
              },
            ].map((mod, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className="group p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {mod.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">
                    {mod.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. End-to-End Flow */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Flujo End-to-End
            </h2>
            <p className="text-slate-600 mt-2">
              Desde la necesidad hasta el control final.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {[
                { step: "1", title: "Planeamiento" },
                { step: "2", title: "Requisitos" },
                { step: "3", title: "Estudio de Mercado" },
                { step: "4", title: "Ejecución Contractual" },
                { step: "5", title: "Almacén" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white md:bg-transparent p-4 md:p-0 rounded-lg shadow-sm md:shadow-none border md:border-none border-slate-100"
                >
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-primary text-primary font-bold flex items-center justify-center text-xl shadow-md mb-3">
                    {item.step}
                  </div>
                  <span className="font-semibold text-slate-800 text-center">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Benefits by User Role */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Beneficios por Rol
          </h2>

          <Tabs defaultValue="logistica" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
              <TabsTrigger
                value="logistica"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Logística
              </TabsTrigger>
              <TabsTrigger
                value="usuario"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Área Usuaria
              </TabsTrigger>
              <TabsTrigger
                value="gestion"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Alta Dirección
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="logistica"
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-primary">
                    Para el equipo de Logística
                  </h3>
                  <p className="text-slate-600">
                    Centraliza el control operativo y reduce errores manuales.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-primary" />{" "}
                      Generación automática de documentos
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> Control
                      de stock en tiempo real
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> Alertas
                      de vencimiento de plazos
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                  <Truck className="w-32 h-32 text-primary/20" />
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="usuario"
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-accent">
                    Para las Áreas Usuarias
                  </h3>
                  <p className="text-slate-600">
                    Facilita el seguimiento de sus pedidos sin llamar a
                    logística.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> Registro
                      intuitivo de requerimientos
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-accent" />{" "}
                      Trazabilidad: sepa dónde está su pedido
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-accent" />{" "}
                      Notificaciones automáticas de estado
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                  <Users2 className="w-32 h-32 text-accent/20" />
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="gestion"
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-slate-800">
                    Para la Alta Dirección
                  </h3>
                  <p className="text-slate-600">
                    Tome decisiones informadas con datos en tiempo real.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-800" />{" "}
                      Dashboard de ejecución presupuestal
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-800" />{" "}
                      Reportes de gestión y cuellos de botella
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-800" />{" "}
                      Transparencia en la gestión pública
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                  <BarChart3 className="w-32 h-32 text-slate-200" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 8. Results & Metrics */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">
            Resultados Comprobados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-extrabold mb-2 text-white/90">
                40%
              </div>
              <p className="text-white/80 font-medium">
                Reducción en tiempos de proceso
              </p>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2 text-white/90">
                0
              </div>
              <p className="text-white/80 font-medium">Papeles perdidos</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2 text-white/90">
                100%
              </div>
              <p className="text-white/80 font-medium">
                Trazabilidad y Transparencia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Licensing Model */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Modelo de Licenciamiento Flexible
            </h2>
            <Card className="border-2 border-primary/20 shadow-xl bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
                Todo incluido
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Suscripción Anual SaaS
                </h3>
                <p className="text-slate-500 mb-8">
                  Sin costos ocultos de infraestructura.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded text-primary">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-700">
                        Licencias de usuarios ilimitadas
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded text-primary">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-700">
                        Hosting en la nube incluido
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded text-primary">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-700">
                        Soporte técnico especializado
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded text-primary">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-700">
                        Actualizaciones normativas gratuitas
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded text-primary">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-700">
                        Copias de seguridad automáticas
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded text-primary">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-700">
                        Capacitación inicial
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. Demo Credentials & Video Section */}
      <section
        id="demo"
        className="py-24 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Demostración del Sistema
            </h2>
            <p className="text-slate-400">
              Vea el sistema en acción o pruebe nuestro entorno interactivo.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-bold text-primary mb-8 text-center">
              Videos de Demostración
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/3YBNrwXsKas"
                  title="GRACE Demo Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                  <h4 className="text-lg font-bold text-primary mb-2">
                    Tutoriales Completos
                  </h4>
                  <p className="text-slate-400 mb-6">
                    Explore nuestra playlist detallada para conocer cada
                    funcionalidad del sistema.
                  </p>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=3YBNrwXsKas&list=PLzBoHlVqLI4bY2lDA-CN-YOqFu49ShbVw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Playlist en YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 text-primary rounded-2xl mb-6">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Entorno de Pruebas Directo
              </h3>
              <p className="text-slate-400 mb-8">
                Acceda a nuestro entorno demo para navegar por los menús y
                flujos reales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <p className="text-xs text-slate-500 uppercase font-bold mb-1">
                    URL
                  </p>
                  <p className="text-primary font-mono truncate">
                    demo.abastecimiento.pe
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <p className="text-xs text-slate-500 uppercase font-bold mb-1">
                    Usuario
                  </p>
                  <p className="text-white font-mono">demo</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <p className="text-xs text-slate-500 uppercase font-bold mb-1">
                    Contraseña
                  </p>
                  <p className="text-white font-mono">demostración</p>
                </div>
              </div>

              <Button
                asChild
                className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
              >
                <a
                  href="https://demo.abastecimiento.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acceder al Demo Interactiva
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. ¿Cómo empezar? & CTA */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  ¿Cómo empezar?
                </h2>
                <p className="text-lg text-slate-600">
                  Modernizar su gestión logística es más fácil de lo que piensa.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Solicita una demostración",
                    desc: "Contáctenos vía WhatsApp para coordinar una reunión.",
                  },
                  {
                    step: "02",
                    title: "Evaluación al instante",
                    desc: "Entendemos sus procesos actuales y necesidades específicas.",
                  },
                  {
                    step: "03",
                    title: "Habilitación y Carga",
                    desc: "Activamos su entidad y cargamos sus catálogos base.",
                  },
                  {
                    step: "04",
                    title: "Capacitación y Arranque",
                    desc: "Entrenamos a su equipo por roles y acompañamos durante todo el año.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="text-3xl font-black text-slate-200">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2 transform scale-105"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-slate-100 text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
                  ¿Listo para transformar su gestión?
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  No pierda más tiempo en procesos manuales. Agende hoy mismo
                  una demostración personalizada con uno de nuestros
                  especialistas vía WhatsApp.
                </p>
                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full h-16 text-xl font-bold bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-200"
                  >
                    <a
                      href="http://bit.ly/4sntn0B"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      Solicitar Demo por WhatsApp
                      <ArrowRight className="w-6 h-6" />
                    </a>
                  </Button>
                  <p className="text-sm text-slate-400">
                    Atención inmediata y personalizada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                GRACE
              </span>
              <p className="mt-4 text-slate-600 max-w-sm">
                La solución tecnológica líder para la gestión logística en el
                sector público. Transformando el estado, un proceso a la vez.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    ¿Qué es GRACE?
                  </a>
                </li>
                <li>
                  <a
                    href="#modules"
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    Módulos
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <a
                    href="#demo"
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Contacto</h4>
              <ul className="space-y-2 text-slate-600">
                <li>contacto@abastecimiento.pe</li>
                <li>+51 940 413 610</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} GRACE. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-primary">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
