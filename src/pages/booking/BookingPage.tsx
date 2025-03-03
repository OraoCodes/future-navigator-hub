
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Mic, Check, Calendar, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
  
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });
  
  const services: Record<string, ServiceDetails> = {
    "cv-review": {
      title: "CV Review",
      description: "Get expert feedback on your CV to highlight your strengths and stand out to recruiters.",
      icon: <FileText size={24} />,
      price: "$99",
      duration: "45 min",
    },
    "career-coaching": {
      title: "Career Coaching",
      description: "Strategic guidance to help you navigate your career path and achieve your professional goals.",
      icon: <Users size={24} />,
      price: "$149",
      duration: "60 min",
    },
    "mock-interview": {
      title: "Mock Interview",
      description: "Practice with realistic technical interviews and receive detailed feedback to improve.",
      icon: <Mic size={24} />,
      price: "$129",
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value,
    });
  };
  
  const nextStep = () => {
    if (step === 1) {
      // Validate contact information
      if (!bookingDetails.name || !bookingDetails.email) {
        toast({
          title: "Missing Information",
          description: "Please provide your name and email address.",
          variant: "destructive",
        });
        return;
      }
    } else if (step === 2) {
      // Validate date and time
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would connect to your payment provider
    // and then create the booking in your database
    
    // Mock the payment and booking process
    console.log("Booking details:", bookingDetails);
    
    // Show success message
    toast({
      title: "Booking Successful!",
      description: "You will receive a confirmation email shortly.",
    });
    
    // Redirect to confirmation page
    navigate("/booking/confirmation");
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
          
          {/* Progress Steps */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="md:col-span-2">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit}>
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
                            className="w-full bg-navy text-white"
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
                            onClick={prevStep}
                          >
                            Back
                          </Button>
                          <Button 
                            type="button" 
                            className="flex-1 bg-navy text-white"
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
                            </div>
                          </div>
                        </div>
                        
                        {/* Mock payment form - would be replaced with Stripe or PayPal */}
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input
                            id="cardName"
                            placeholder="Enter name on card"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input
                              id="cvc"
                              placeholder="123"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-4 flex gap-3">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={prevStep}
                          >
                            Back
                          </Button>
                          <Button 
                            type="submit" 
                            className="flex-1 bg-navy text-white"
                          >
                            Pay {serviceDetails.price} & Confirm
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Service Summary Section */}
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
