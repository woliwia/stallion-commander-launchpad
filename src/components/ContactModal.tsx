import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactModalProps {
  children: React.ReactNode;
}

const ContactModal = ({ children }: ContactModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white border-0">
        {/* Dark Header */}
        <div className="bg-slate-800 text-white p-6 relative">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-left">
              Contact Us
            </DialogTitle>
          </DialogHeader>
        </div>
        
        {/* White Body */}
        <div className="p-8 bg-white">
          <div className="space-y-6">
            {/* Main description */}
            <p className="text-gray-700 text-base leading-relaxed">
              Do you have questions or need help with your order? Please contact our customer service team by sending us a message to the email address below.
            </p>
            
            {/* Contact info container */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Section */}
                <div>
                  <h3 className="text-gray-600 font-medium mb-2">Order Support Email</h3>
                  <p className="text-gray-900 font-semibold">support@commanderhealth.com</p>
                </div>
                
                {/* Phone Section */}
                <div>
                  <h3 className="text-gray-600 font-medium mb-2">Order Status Support</h3>
                  <p className="text-gray-900 font-semibold">(+1) 804-315-0487</p>
                </div>
              </div>
            </div>
            
            {/* Response time info */}
            <p className="text-gray-700 text-base leading-relaxed">
              A customer service agent will reply within 48 hours. Your message will be handled by a real person who will take care of your concerns and answer your questions.
            </p>
            
            {/* Closing message */}
            <p className="text-gray-700 text-base leading-relaxed">
              We look forward to hearing from you and helping you with your order or any questions you may have.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;