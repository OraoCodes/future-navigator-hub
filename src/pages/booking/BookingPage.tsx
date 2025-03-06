import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Mic, Check, Calendar, Clock, CreditCard, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/contexts/UserContext";
import { calendarService } from "@/services/calendarService";
import { createPaymentIntent } from "@/api/payment";
import StripePaymentWrapper from "@/components/payment/StripePaymentWrapper";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ServiceDetails {
  title: string;
  description: string;
  icon: React.ReactElement;
  price: string;
  duration: string;
}

const BookingPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAuthenticated } = useUser();
  
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'mpesa'>('stripe');
  
  const services: Record<string, ServiceDetails> = {
    "cv-review": {
      title: "CV Review",
      description: "Get expert feedback on your CV to highlight your strengths and stand out to recruiters.",
      icon: <FileText size={24} />,
      price: "KES 2,500",
      duration: "45 min",
    },
    "career-coaching": {
      title: "Career Coaching",
      description: "Strategic guidance to help you navigate your career path and achieve your professional goals.",
      icon: <Users size={24} />,
      price: "KES 3,000",
      duration: "60 min",
    },
    "mock-interview": {
      title: "Mock Interview",
      description: "Practice with realistic technical interviews and receive detailed feedback to improve.",
      icon: <Mic size={24} />,
      price: "KES 5,000",
      duration: "60 min",
    },
  };
  
  const serviceDetails = serviceId ? services[serviceId] : null;
  
  if (!serviceDetails) {
    return (
      <MainLayout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Button 
            className="bg-navy text-white"
            onClick={() => navigate("/services")}
          >
            View All Services
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  React.useEffect(() => {
    if (isAuthenticated && user) {
      setBookingDetails((prevDetails) => ({
        ...prevDetails,
        name: user.name || prevDetails.name,
        email: user.email || prevDetails.email,
      }));
    }
  }, [isAuthenticated, user]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value,
    });
  };
  
  const nextStep = () => {
    if (step === 1) {
      if (!bookingDetails.name || !bookingDetails.email) {
        toast({
          title: "Missing Information",
          description: "Please provide your name and email address.",
          variant: "destructive",
        });
        return;
      }
    } else if (step === 2) {
      if (!bookingDetails.date || !bookingDetails.time) {
        toast({
          title: "Missing Information",
          description: "Please select a date and time for your session.",
          variant: "destructive",
        });
        return;
      }
    }
    
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const getAmountFromPrice = (price: string): number => {
    // Extract number from "KES X,XXX" format
    const amount = parseFloat(price.replace(/[^0-9.]/g, ''));
    return amount;
  };
  
  const handlePayment = async () => {
    try {
      setIsProcessingPayment(true);
      const amount = getAmountFromPrice(serviceDetails.price);
      const response = await createPaymentIntent(amount);
      
      // Clear any existing client secret first
      setClientSecret(null);
      
      // Small delay to ensure state is cleared
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Set new client secret
      setClientSecret(response.clientSecret);
    } catch (error) {
      console.error('Error creating payment intent:', error);
      toast({
        title: "Payment Error",
        description: "Failed to initialize payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessingPayment(false);
    }
  };
  
  const handlePaymentSuccess = async () => {
    try {
      console.log('Payment success handler triggered');
      
      // Show loading toast during redirection
      toast({
        title: "Payment Successful",
        description: "Redirecting to confirmation page...",
      });

      // Save the booking details to your backend here
      const bookingData = {
        service: serviceDetails.title,
        date: bookingDetails.date,
        time: bookingDetails.time,
        duration: serviceDetails.duration,
        amount: serviceDetails.price,
        paymentMethod: paymentMethod,
      };

      console.log('Redirecting to confirmation page with booking data:', bookingData);

      // Navigate to confirmation page with booking details
      navigate('/booking/confirmation', { 
        state: { 
          booking: bookingData,
          email: bookingDetails.email 
        },
        replace: true  // This prevents going back to payment page
      });
    } catch (error) {
      console.error('Error in payment success handler:', error);
      setIsProcessingPayment(false);
      toast({
        title: "Booking Error",
        description: "There was an error saving your booking. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  const handlePaymentError = (error: Error) => {
    toast({
      title: "Payment Failed",
      description: error.message || "Payment could not be processed. Please try again.",
      variant: "destructive",
    });
  };
  
  const handleMpesaPayment = async () => {
    try {
      setIsProcessingPayment(true);
      // TODO: Implement M-Pesa payment logic
      toast({
        title: "M-Pesa Payment",
        description: "Please check your phone for the M-Pesa prompt",
      });
      // Simulate M-Pesa payment for now
      setTimeout(() => {
        handlePaymentSuccess();
      }, 2000);
    } catch (error) {
      console.error('M-Pesa payment error:', error);
      toast({
        title: "Payment Error",
        description: "Failed to process M-Pesa payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessingPayment(false);
    }
  };
  
  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];
  
  return (
    <MainLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy mb-2">Book Your {serviceDetails.title}</h1>
            <p className="text-gray-600">
              Complete the form below to schedule your session.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-navy text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  {step > 1 ? <Check size={20} /> : 1}
                </div>
                <span className="text-sm mt-2">Details</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-navy" : "bg-gray-200"}`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-navy text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  {step > 2 ? <Check size={20} /> : 2}
                </div>
                <span className="text-sm mt-2">Schedule</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-navy" : "bg-gray-200"}`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-navy text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  3
                </div>
                <span className="text-sm mt-2">Payment</span>
              </div>
            </div>
          </div>
          
          <div className="md:grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={(e) => e.preventDefault()}>
                    {step === 1 && (
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-navy mb-4">Your Information</h2>
                        
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={bookingDetails.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={bookingDetails.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={bookingDetails.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="notes">Special Requests or Context</Label>
                          <Textarea
                            id="notes"
                            name="notes"
                            value={bookingDetails.notes}
                            onChange={handleInputChange}
                            placeholder="Share any specific topics you'd like to discuss or context that will help your coach prepare"
                            rows={4}
                          />
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            type="button" 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={nextStep}
                          >
                            Continue to Schedule
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {step === 2 && (
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-navy mb-4">Select Date & Time</h2>
                        
                        <div className="space-y-2">
                          <Label htmlFor="date">Select Date</Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={bookingDetails.date}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="time">Select Time</Label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                            {availableTimes.map((time) => (
                              <Button
                                key={time}
                                type="button"
                                variant={bookingDetails.time === time ? "default" : "outline"}
                                className={bookingDetails.time === time ? "bg-navy text-white" : "border-navy text-navy"}
                                onClick={() => setBookingDetails({ ...bookingDetails, time })}
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-4 flex gap-3">
                          <Button 
                            type="button" 
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                            onClick={prevStep}
                          >
                            Back
                          </Button>
                          <Button 
                            type="button" 
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={nextStep}
                          >
                            Continue to Payment
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {step === 3 && (
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-navy mb-4">Review & Payment</h2>
                        
                        <div className="space-y-4 mb-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Booking Summary</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <p className="text-gray-500">Service:</p>
                              <p className="font-medium">{serviceDetails.title}</p>
                              
                              <p className="text-gray-500">Date:</p>
                              <p className="font-medium">{bookingDetails.date}</p>
                              
                              <p className="text-gray-500">Time:</p>
                              <p className="font-medium">{bookingDetails.time}</p>
                              
                              <p className="text-gray-500">Duration:</p>
                              <p className="font-medium">{serviceDetails.duration}</p>

                              <p className="text-gray-500">Amount:</p>
                              <p className="font-medium">{serviceDetails.price}</p>
                            </div>
                          </div>

                          {!clientSecret && (
                            <div className="space-y-4">
                              <h3 className="font-medium">Select Payment Method</h3>
                              <RadioGroup
                                value={paymentMethod}
                                onValueChange={(value) => setPaymentMethod(value as 'stripe' | 'mpesa')}
                                className="grid grid-cols-2 gap-4"
                              >
                                <div className={`relative rounded-lg border-2 p-4 cursor-pointer ${
                                  paymentMethod === 'stripe' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                                }`}>
                                  <RadioGroupItem value="stripe" id="stripe" className="sr-only" />
                                  <label htmlFor="stripe" className="flex flex-col items-center gap-2 cursor-pointer">
                                    <CreditCard className="h-6 w-6" />
                                    <span className="font-medium">Card Payment</span>
                                    <span className="text-xs text-gray-500">Pay with Visa, Mastercard</span>
                                  </label>
                                </div>

                                <div className={`relative rounded-lg border-2 p-4 cursor-pointer ${
                                  paymentMethod === 'mpesa' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                                }`}>
                                  <RadioGroupItem value="mpesa" id="mpesa" className="sr-only" />
                                  <label htmlFor="mpesa" className="flex flex-col items-center gap-2 cursor-pointer">
                                    <Phone className="h-6 w-6" />
                                    <span className="font-medium">M-Pesa</span>
                                    <span className="text-xs text-gray-500">Pay with M-Pesa</span>
                                  </label>
                                </div>
                              </RadioGroup>
                            </div>
                          )}
                        </div>

                        {!clientSecret ? (
                          <div className="pt-4 flex gap-3">
                            <Button 
                              type="button" 
                              variant="outline"
                              className="border-gray-300 text-gray-700 hover:bg-gray-50"
                              onClick={prevStep}
                            >
                              Back
                            </Button>
                            <Button 
                              type="button"
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                              onClick={paymentMethod === 'stripe' ? handlePayment : handleMpesaPayment}
                              disabled={isProcessingPayment}
                            >
                              {isProcessingPayment ? (
                                <>Processing...</>
                              ) : (
                                <>Pay {serviceDetails.price} with {paymentMethod === 'stripe' ? 'Card' : 'M-Pesa'}</>
                              )}
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <StripePaymentWrapper
                              clientSecret={clientSecret}
                              amount={getAmountFromPrice(serviceDetails.price)}
                              onSuccess={handlePaymentSuccess}
                              onError={handlePaymentError}
                            />
                            <Button 
                              type="button" 
                              variant="outline"
                              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 mt-4"
                              onClick={() => setClientSecret(null)}
                            >
                              Cancel Payment
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-1">
              <Card className="shadow-sm bg-navy/5">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="mb-4 w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy">
                      {serviceDetails.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{serviceDetails.title}</h3>
                    <p className="text-gray-600 mb-4">{serviceDetails.description}</p>
                  </div>
                  
                  <div className="space-y-4 py-4 border-t border-gray-200">
                    <div className="flex items-center">
                      <Clock size={18} className="text-navy mr-2" />
                      <div>
                        <p className="text-sm font-medium">Duration</p>
                        <p className="text-gray-600">{serviceDetails.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar size={18} className="text-navy mr-2" />
                      <div>
                        <p className="text-sm font-medium">Format</p>
                        <p className="text-gray-600">Online via Zoom</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Price</span>
                      <span className="text-xl font-bold text-navy">{serviceDetails.price}</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      All payments are securely processed. You can cancel or reschedule up to 24 hours before your session.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookingPage;
