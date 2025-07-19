import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, ChevronDown, ArrowRight, Bot, Cpu, Cog, Shield, Users, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white" id="home">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Bot className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Jericobots</span>
              </div>
            </div>

            <div className="hidden md:block" id="main-navigation">
              <div className="ml-10 flex items-baseline space-x-8">
                {/* Navigation links updated to scroll to sections */}
                <a href="#hero" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Beranda</a>
                <div className="relative group">
                  <button className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center">
                    Produk <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <a href="#case-studies" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Studi Kasus</a>
                <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Tentang</a>
                <a href="#blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Blog</a>
                <a href="#join-us" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Join Us</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Kontak</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {/* Buttons acting as links, using asChild prop */}
              <Button variant="outline" size="sm" asChild>
                <a href="#contact">Jadwalkan Demo</a>
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="#products">Lihat Produk</a>
              </Button>
            </div>

            <div className="md:hidden">
              <button className="text-gray-900 hover:text-blue-600">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                  Teknologi Masa Depan
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Empowering Industries with{" "}
                  <span className="text-blue-200">Intelligent Technology</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Solusi AI, Otomatisasi, dan Robotika untuk Masa Depan Bisnis Anda.
                  Jericobots menghadirkan inovasi teknologi terdepan untuk industri modern.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Buttons acting as links, using asChild prop */}
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold" asChild>
                  <a href="#products">
                    Lihat Produk
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <a href="#contact">Jadwalkan Demo</a>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-blue-200 text-sm">Klien Terpercaya</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-blue-200 text-sm">Akurasi Sistem</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl p-8 backdrop-blur-sm border border-blue-400/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <Bot className="h-12 w-12 text-blue-200 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">AI Solutions</h3>
                    <p className="text-blue-100 text-sm">Artificial Intelligence terdepan untuk analisis data dan automasi proses bisnis</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <Cog className="h-12 w-12 text-blue-200 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Automation</h3>
                    <p className="text-blue-100 text-sm">Sistem otomatisasi industri untuk efisiensi operasional maksimal</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <Cpu className="h-12 w-12 text-blue-200 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Robotics</h3>
                    <p className="text-blue-100 text-sm">Robot industri canggih untuk produksi dan operasi presisi tinggi</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <Shield className="h-12 w-12 text-blue-200 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Security</h3>
                    <p className="text-blue-100 text-sm">Sistem keamanan berbasis AI untuk monitoring dan proteksi 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Katalog Produk Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan solusi teknologi terdepan yang dirancang khusus untuk meningkatkan
              efisiensi dan produktivitas industri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Vision System */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Bot className="h-8 w-8 text-blue-600" />
                </div>
                <Badge variant="secondary" className="w-fit">AI Vision</Badge>
                <CardTitle className="text-xl font-bold">Smart Vision System</CardTitle>
                <CardDescription>
                  Sistem AI vision untuk quality control, object detection, dan monitoring
                  produksi real-time dengan akurasi tinggi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Akurasi 99.8%
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Cpu className="h-4 w-4 text-blue-500 mr-2" />
                    Real-time Processing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    Enterprise Security
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="#"> {/* Placeholder for product detail page */}
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Industrial Robotics */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Cog className="h-8 w-8 text-green-600" />
                </div>
                <Badge variant="secondary" className="w-fit">Robotics</Badge>
                <CardTitle className="text-xl font-bold">Industrial Robot Arms</CardTitle>
                <CardDescription>
                  Robot lengan industri untuk assembly line, welding, painting, dan
                  material handling dengan presisi mikron
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Presisi ±0.02mm
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Cpu className="h-4 w-4 text-blue-500 mr-2" />
                    6-Axis Movement
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    Safety Certified
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="#"> {/* Placeholder for product detail page */}
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Automation Platform */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Cpu className="h-8 w-8 text-purple-600" />
                </div>
                <Badge variant="secondary" className="w-fit">Automation</Badge>
                <CardTitle className="text-xl font-bold">Smart Factory Platform</CardTitle>
                <CardDescription>
                  Platform otomatisasi pabrik pintar dengan IoT integration, predictive
                  maintenance, dan dashboard analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    30% Efficiency Boost
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Cpu className="h-4 w-4 text-blue-500 mr-2" />
                    IoT Integration
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    Cloud & On-premise
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="#"> {/* Placeholder for product detail page */}
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
              <a href="#products">
                Lihat Semua Produk
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apa Kata Klien Kami
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Testimoni dari berbagai industri yang telah merasakan manfaat
              solusi teknologi Jericobots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">PT. Manufaktur Jaya</CardTitle>
                    <CardDescription className="text-blue-100">Manufacturing Industry</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 italic">
                  "Implementasi robot industrial dari Jericobots meningkatkan produktivitas
                  kami hingga 45%. Sistem yang sangat reliable dan support team yang responsif."
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">CV. Teknologi Maju</CardTitle>
                    <CardDescription className="text-blue-100">Automotive Industry</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 italic">
                  "AI Vision System dari Jericobots membantu kami mendeteksi defect dengan
                  akurasi 99.8%. Quality control menjadi lebih efisien dan konsisten."
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">PT. Industri Elektronik</CardTitle>
                    <CardDescription className="text-blue-100">Electronics Industry</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 italic">
                  "Platform Smart Factory mengintegrasikan seluruh operasi kami. Real-time
                  monitoring dan predictive maintenance sangat membantu mengurangi downtime."
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Studi Kasus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implementasi nyata teknologi Jericobots di berbagai industri yang memberikan
              dampak signifikan pada efisiensi dan produktivitas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Manufacturing Case Study */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">Manufacturing</Badge>
                  <h3 className="text-white font-bold text-lg">PT. Industri Otomotif Nusantara</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Implementasi robot assembly line yang meningkatkan produktivitas hingga 60%
                    dan mengurangi defect rate menjadi kurang dari 0.1%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-blue-600">+60%</div>
                      <div className="text-gray-500">Produktivitas</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">-85%</div>
                      <div className="text-gray-500">Defect Rate</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-600" asChild>
                    <a href="#"> {/* Placeholder for case study detail page */}
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Electronics Case Study */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">Electronics</Badge>
                  <h3 className="text-white font-bold text-lg">CV. Elektronika Presisi</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    AI Vision System untuk quality inspection PCB yang mencapai akurasi 99.9%
                    dengan kecepatan processing 2x lebih cepat.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-blue-600">99.9%</div>
                      <div className="text-gray-500">Akurasi</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">2x</div>
                      <div className="text-gray-500">Kecepatan</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-green-50 group-hover:border-green-600" asChild>
                    <a href="#"> {/* Placeholder for case study detail page */}
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Smart Factory Case Study */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">Smart Factory</Badge>
                  <h3 className="text-white font-bold text-lg">PT. Pabrik Pintar Indonesia</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Transformasi digital complete factory dengan IoT integration, predictive
                    maintenance, dan real-time monitoring dashboard.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-blue-600">-70%</div>
                      <div className="text-gray-500">Downtime</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">+45%</div>
                      <div className="text-gray-500">Efisiensi</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-purple-50 group-hover:border-purple-600" asChild>
                    <a href="#"> {/* Placeholder for case study detail page */}
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="#case-studies">
                Lihat Semua Studi Kasus
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-600 border-blue-200">Tentang Jericobots</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Pelopor Teknologi AI & Robotika di Indonesia
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Sejak 2020, Jericobots telah menjadi pionir dalam menghadirkan solusi
                  teknologi AI, otomatisasi, dan robotika untuk industri Indonesia.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Misi Kami</h3>
                    <p className="text-gray-600">
                      Mengakselerasi transformasi digital industri Indonesia melalui implementasi
                      teknologi AI dan robotika yang terdepan dan terjangkau.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Visi Kami</h3>
                    <p className="text-gray-600">
                      Menjadi perusahaan teknologi terdepan yang memberdayakan industri Indonesia
                      untuk bersaing di era digital global.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Nilai Kami</h3>
                    <p className="text-gray-600">
                      Inovasi berkelanjutan, kualitas terjamin, dan partnership yang kuat
                      dengan setiap klien untuk mencapai kesuksesan bersama.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="#about">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                    <div className="text-gray-600">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-gray-600">Klien Terpercaya</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                    <div className="text-gray-600">Proyek Selesai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
                    <div className="text-gray-600">Tingkat Kepuasan</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Tim Expert Kami</h3>
                <p className="text-blue-100 mb-6">
                  Didukung oleh tim ahli berpengalaman dalam AI, Machine Learning,
                  Robotics Engineering, dan Industrial Automation.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Cpu className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">25+ Expert Engineers</div>
                    <div className="text-blue-200">Ready to serve you</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / News Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blog & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artikel terbaru tentang teknologi AI, robotika, dan tren industri masa depan
              dari para ahli Jericobots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Technology Article */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30">AI Technology</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-xs opacity-75 mb-2">15 Des 2024 • 5 min read</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Masa Depan AI dalam Industri Manufacturing 4.0
                  </h3>
                  <p className="text-gray-600">
                    Eksplorasi mendalam tentang bagaimana Artificial Intelligence akan mengubah
                    landscape industri manufacturing dalam dekade mendatang.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-500">Dr. Andi Robotika</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700" asChild>
                      <a href="#"> {/* Placeholder for blog article page */}
                        Baca Artikel
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Robotics Trends Article */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30">Robotics</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-xs opacity-75 mb-2">12 Des 2024 • 7 min read</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    10 Tren Robotika yang Mengubah Industri 2025
                  </h3>
                  <p className="text-gray-600">
                    Analisis komprehensif tentang tren robotika terbaru yang akan mendominasi
                    berbagai sektor industri di tahun 2025.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Cog className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-500">Sarah Teknologi</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700" asChild>
                      <a href="#"> {/* Placeholder for blog article page */}
                        Baca Artikel
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Automation Guide */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30">Automation</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-xs opacity-75 mb-2">10 Des 2024 • 6 min read</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    Panduan Lengkap Implementasi Smart Factory
                  </h3>
                  <p className="text-gray-600">
                    Step-by-step guide untuk transformasi pabrik konvensional menjadi smart factory
                    dengan teknologi IoT dan automation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Cpu className="h-4 w-4 text-orange-600" />
                      </div>
                      <span className="text-sm text-gray-500">Budi Otomasi</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700" asChild>
                      <a href="#"> {/* Placeholder for blog article page */}
                        Baca Artikel
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
              <a href="#blog">
                Lihat Semua Artikel
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Career / Join Us Section */}
      <section id="join-us" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Join Jericobots</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bergabunglah dengan Tim Inovator
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Wujudkan karir impian Anda bersama Jericobots dan berkontribusi dalam
              membangun masa depan teknologi Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Lingkungan Kerja Inovatif</h3>
                    <p className="text-blue-100">
                      Bekerja dengan teknologi terdepan dan tim yang passionate dalam menciptakan solusi revolusioner
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Tim yang Kolaboratif</h3>
                    <p className="text-blue-100">
                      Budaya kerja yang mendukung pembelajaran berkelanjutan dan pertukaran ide yang kreatif
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Benefit Komprehensif</h3>
                    <p className="text-blue-100">
                      Paket kompensasi kompetitif, asuransi kesehatan, dan program pengembangan karir yang jelas
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold" asChild>
                  <a href="#join-us">
                    Lihat Lowongan Kerja
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <a href="mailto:hr@jericobots.com">Kirim CV Inisiatif</a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Open Positions */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-500 text-white">Open</Badge>
                    <Bot className="h-6 w-6 text-blue-200" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">AI Engineer</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Mengembangkan algoritma machine learning dan deep learning untuk solusi industri
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-200">Full-time • Jakarta</span>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" asChild>
                      <a href="#">Apply</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-500 text-white">Open</Badge>
                    <Cog className="h-6 w-6 text-blue-200" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">Robotics Engineer</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Merancang dan mengembangkan sistem robotika untuk aplikasi industri
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-200">Full-time • Jakarta</span>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" asChild>
                      <a href="#">Apply</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-yellow-500 text-white">Hot</Badge>
                    <Cpu className="h-6 w-6 text-blue-200" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">Software Developer</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Membangun platform dan aplikasi untuk sistem otomasi industri
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-200">Full-time • Remote</span>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" asChild>
                      <a href="#">Apply</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-500 text-white">New</Badge>
                    <Users className="h-6 w-6 text-blue-200" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">Sales Engineer</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Menjual solusi teknologi dan membangun hubungan dengan klien enterprise
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-200">Full-time • Jakarta</span>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" asChild>
                      <a href="#">Apply</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-16">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Siap Transformasi Digital?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Konsultasi gratis dengan tim expert kami untuk menemukan solusi teknologi
                  yang tepat untuk bisnis Anda
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Konsultasi Gratis</h3>
                  <p className="text-gray-600 text-sm">
                    Diskusi mendalam tentang kebutuhan dan tantangan bisnis Anda
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cog className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Demo Produk</h3>
                  <p className="text-gray-600 text-sm">
                    Lihat langsung performa dan kapabilitas teknologi kami
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proposal Kustom</h3>
                  <p className="text-gray-600 text-sm">
                    Solusi yang dirancang khusus sesuai dengan kebutuhan industri Anda
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-semibold" asChild>
                  <a href="mailto:info@jericobots.com">
                    Jadwalkan Konsultasi
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                  <a href="mailto:sales@jericobots.com">Hubungi Sales</a>
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-semibold text-gray-900">info@jericobots.com</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Telepon</div>
                  <div className="font-semibold text-gray-900">+62 21 1234 5678</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">WhatsApp</div>
                  <div className="font-semibold text-gray-900">+62 812 3456 7890</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold">Jericobots</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Pelopor teknologi AI, otomatisasi, dan robotika untuk industri masa depan.
                Menghadirkan solusi cerdas untuk meningkatkan efisiensi dan produktivitas bisnis Anda.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white" asChild>
                  <a href="https://www.linkedin.com/company/jericobots" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white" asChild>
                  <a href="https://twitter.com/jericobots" target="_blank" rel="noopener noreferrer">Twitter</a>
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white" asChild>
                  <a href="https://www.youtube.com/jericobots" target="_blank" rel="noopener noreferrer">YouTube</a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#hero" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Produk</a></li>
                <li><a href="#case-studies" className="hover:text-white transition-colors">Studi Kasus</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#join-us" className="hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Jakarta, Indonesia</li>
                <li>+62 21 1234 5678</li>
                <li>info@jericobots.com</li>
                <li>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 mt-4" asChild>
                    <a href="mailto:info@jericobots.com">Hubungi Kami</a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Jericobots. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
