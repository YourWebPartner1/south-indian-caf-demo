import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/5 rounded-full blur-3xl" />
      
      <div className="container-narrow mx-auto relative">
        <div className="text-center mb-16">
          <span className="section-badge">Get In Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <div className="decorative-line mt-6" />
          <p className="text-muted-foreground max-w-xl mx-auto mt-6 text-lg">
            Visit us or reach out for orders and inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-3 relative h-80 lg:h-auto min-h-[350px] rounded-3xl overflow-hidden bg-muted border border-border/50 shadow-card">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-secondary/50">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-golden to-amber flex items-center justify-center shadow-golden">
                  <MapPin className="w-10 h-10 text-espresso" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Find Us Here</h3>
                <p className="text-muted-foreground">
                  123 Sample Street, Demo City
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Near Central Metro Station
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card-warm !p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-golden/20 to-amber/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-golden" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-foreground font-medium">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Call for reservations</p>
                </div>
              </div>
            </div>

            <div className="card-warm !p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-foreground font-medium">+91 98765 43210</p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            <div className="card-warm !p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-golden/20 to-amber/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-golden" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Mon - Sat</span>
                      <span className="text-foreground font-medium">6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground font-medium">7:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-warm !p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-golden/20 to-amber/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-golden" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground font-medium">hello@bangalorecafe.demo</p>
                  <p className="text-sm text-muted-foreground">For business inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
