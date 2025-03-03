
// Google Calendar API integration
import { useUser } from "@/contexts/UserContext";

// Types for Calendar API
interface CalendarEvent {
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees?: {
    email: string;
    name?: string;
  }[];
}

// Mock data storage for fallback
const mockCalendarEvents: Record<string, CalendarEvent[]> = {};

// Google Calendar API URLs
const GOOGLE_CALENDAR_API_BASE = 'https://www.googleapis.com/calendar/v3';

/**
 * Get Google Calendar access token from localStorage or session
 * In a real implementation, you would handle token refresh here
 */
const getAccessToken = (): string | null => {
  return localStorage.getItem('googleCalendarToken');
};

/**
 * Save Google Calendar access token
 */
const saveAccessToken = (token: string): void => {
  localStorage.setItem('googleCalendarToken', token);
};

export const calendarService = {
  /**
   * Check if user is connected to Google Calendar
   */
  isConnected: (): boolean => {
    return !!getAccessToken();
  },
  
  /**
   * Connect to Google Calendar (OAuth)
   * This is a simplified version - you'll need to implement the full OAuth flow
   */
  connect: async (): Promise<{ success: boolean; error?: string }> => {
    try {
      console.log('Initiating Google Calendar OAuth flow');
      
      // In a real implementation, this would redirect to Google's OAuth consent screen
      // For demonstration, we'll simulate OAuth with a mock token
      
      const mockToken = `mock-token-${Date.now()}`;
      saveAccessToken(mockToken);
      
      console.log('Connected to Google Calendar (mock)');
      
      return {
        success: true
      };
    } catch (error) {
      console.error('Error connecting to Google Calendar:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to connect to Google Calendar'
      };
    }
  },
  
  /**
   * Disconnect from Google Calendar
   */
  disconnect: (): void => {
    localStorage.removeItem('googleCalendarToken');
    console.log('Disconnected from Google Calendar');
  },
  
  /**
   * Create event in Google Calendar
   */
  createEvent: async (userId: string, event: CalendarEvent): Promise<{ success: boolean; eventId?: string; error?: string }> => {
    try {
      console.log(`Creating calendar event for user ${userId}:`, event);
      
      const accessToken = getAccessToken();
      
      if (!accessToken) {
        console.log('No access token found, using mock implementation');
        
        // Fall back to mock implementation if not connected
        const eventId = `event-${Date.now()}`;
        
        if (!mockCalendarEvents[userId]) {
          mockCalendarEvents[userId] = [];
        }
        
        mockCalendarEvents[userId].push(event);
        
        return {
          success: true,
          eventId,
        };
      }
      
      // Real Google Calendar API implementation
      const response = await fetch(`${GOOGLE_CALENDAR_API_BASE}/calendars/primary/events`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Google Calendar API error:', errorData);
        
        // If token expired, we could handle refresh here
        
        throw new Error(errorData.error?.message || 'Failed to create event');
      }
      
      const data = await response.json();
      console.log('Event created successfully:', data);
      
      return {
        success: true,
        eventId: data.id
      };
    } catch (error) {
      console.error('Error creating calendar event:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error creating event',
      };
    }
  },
  
  /**
   * Get events from Google Calendar
   */
  getEvents: async (userId: string): Promise<{ success: boolean; events?: CalendarEvent[]; error?: string }> => {
    try {
      console.log(`Fetching calendar events for user ${userId}`);
      
      const accessToken = getAccessToken();
      
      if (!accessToken) {
        console.log('No access token found, using mock implementation');
        
        // Fall back to mock implementation if not connected
        const events = mockCalendarEvents[userId] || [];
        
        return {
          success: true,
          events,
        };
      }
      
      // Real Google Calendar API implementation
      const response = await fetch(`${GOOGLE_CALENDAR_API_BASE}/calendars/primary/events?timeMin=${new Date().toISOString()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Google Calendar API error:', errorData);
        
        // If token expired, we could handle refresh here
        
        throw new Error(errorData.error?.message || 'Failed to fetch events');
      }
      
      const data = await response.json();
      console.log('Events fetched successfully:', data);
      
      // Transform Google Calendar events to our format
      const events = data.items.map((item: any) => ({
        summary: item.summary,
        description: item.description || '',
        start: item.start,
        end: item.end,
        attendees: item.attendees || []
      }));
      
      return {
        success: true,
        events
      };
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error fetching events',
      };
    }
  }
};
