
import React, { useState } from 'react';
import { format } from 'date-fns';
import { X, Clock, Mail, MessageSquare, CreditCard, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Booking, BookingStatus } from '@/types/booking';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface BookingDetailsProps {
  booking: Booking;
  onClose: () => void;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ booking, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };
  
  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case BookingStatus.Upcoming:
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Upcoming</Badge>;
      case BookingStatus.Completed:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Completed</Badge>;
      case BookingStatus.Cancelled:
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Cancelled</Badge>;
      default:
        return null;
    }
  };
  
  const handleSendReminder = () => {
    // Mock function to send reminder
    console.log('Sending reminder to:', booking.clientEmail);
    // In a real app, this would trigger a notification via Telegram/WhatsApp
  };
  
  const handleCancelBooking = () => {
    // Mock function to cancel booking
    console.log('Cancelling booking:', booking.id);
    // In a real app, this would update the booking status and process refund
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold flex items-center justify-between">
            <span>Booking Details</span>
            {getStatusBadge(booking.status)}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-lg font-medium">{booking.title}</h3>
            <div className="flex items-center text-gray-500 mt-1">
              <Clock size={16} className="mr-1" />
              <span>
                {format(booking.start, 'EEEE, MMMM d, yyyy')} • {format(booking.start, 'h:mm a')} - {format(booking.end, 'h:mm a')}
              </span>
            </div>
          </div>
          
          <div className="py-3 border-t border-b">
            <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wider mb-2">Client Information</h4>
            <p className="font-medium">{booking.clientName}</p>
            <div className="flex items-center text-gray-500 mt-1">
              <Mail size={16} className="mr-1" />
              <a href={`mailto:${booking.clientEmail}`} className="hover:text-navy">{booking.clientEmail}</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wider mb-2">Booking Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Service</p>
                <p className="font-medium">{booking.serviceType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment</p>
                <div className="flex items-center">
                  <CreditCard size={16} className="mr-1" />
                  <span className="font-medium">${booking.paymentAmount} • {booking.paymentStatus}</span>
                </div>
              </div>
            </div>
          </div>
          
          {booking.notes && (
            <div>
              <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wider mb-2">Notes</h4>
              <div className="bg-gray-50 p-3 rounded-lg border">
                <div className="flex">
                  <MessageSquare size={16} className="mr-2 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{booking.notes}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-6">
          {booking.status === BookingStatus.Upcoming && (
            <>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto"
                onClick={handleSendReminder}
              >
                <Send size={16} className="mr-2" />
                Send Reminder
              </Button>
              <Button 
                variant="destructive" 
                className="w-full sm:w-auto"
                onClick={handleCancelBooking}
              >
                <X size={16} className="mr-2" />
                Cancel & Refund
              </Button>
            </>
          )}
          <Button 
            variant="default" 
            className="w-full sm:w-auto bg-navy hover:bg-navy/90"
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDetails;
