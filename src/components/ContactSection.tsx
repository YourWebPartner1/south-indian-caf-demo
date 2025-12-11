import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Visit us or reach out for orders and inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="relative h-64 md:h-auto min-h-[300px] rounded-2xl overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Map Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">
                  123 Sample Street, Demo City
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card-warm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-golden/20 rounded-xl">
                  <Phone className="w-6 h-6 text-golden" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Call for reservations</p>
                </div>
              </div>
            </div>

            <div className="card-warm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="card-warm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Saturday: 6:00 AM - 10:00 PM</p>
                    <p>Sunday: 7:00 AM - 9:00 PM</p>
                  </div>
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
