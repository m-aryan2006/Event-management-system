/**
 * Universal Management System - Version 4.0.0
 * Complete Multi-System Management Platform
 * Made in Bharat 🇮🇳
 */

(function() {
  'use strict';

  // ============================================
  // Configuration
  // ============================================
  const APP = {
    version: '4.0.0',
    storageKey: 'universalManagementData_v4',
    historyKey: 'managementHistory_v4',
    templatesKey: 'managementTemplates_v4',
    emergencyKey: 'emergencyKit_v4',
    darkModeKey: 'darkModePreference',
    profileKey: 'companyProfile_v4',
    languageKey: 'appLanguage',
    systemKey: 'selectedSystem'
  };

  // ============================================
  // MANAGEMENT SYSTEMS CONFIGURATION
  // ============================================
  const SYSTEMS = {
    event: {
      id: 'event',
      name: 'Event Management',
      icon: 'fa-calendar-alt',
      title: 'Event',
      itemsLabel: 'Events',
      profile: {
        title: 'Event Company Profile',
        subtitle: 'Enter your event management company details',
        icon: 'fa-calendar-alt',
        fields: [
          { id: 'companyName', label: 'Company Name', icon: 'fa-building', placeholder: 'Your Event Company', type: 'text' },
          { id: 'ownerName', label: 'Owner Name', icon: 'fa-user-tie', placeholder: 'John Doe', type: 'text' },
          { id: 'companyEmail', label: 'Email', icon: 'fa-envelope', placeholder: 'info@eventcompany.com', type: 'email' },
          { id: 'companyPhone', label: 'Phone', icon: 'fa-phone', placeholder: '+1 555 1234', type: 'text' },
          { id: 'companyAddress', label: 'Address', icon: 'fa-location-dot', placeholder: '123 Event St, City', type: 'text' },
          { id: 'companyGst', label: 'GST/Tax Number', icon: 'fa-receipt', placeholder: 'GST-123456789', type: 'text' }
        ]
      },
      fields: {
        nameLabel: 'Event Name',
        bookedByLabel: 'Booked By',
        contactLabel: 'Bookie Number',
        venueLabel: 'Venue Name',
        inchargeLabel: 'Incharge',
        inchargePhoneLabel: 'Incharge #',
        extraLabel: 'Volunteers',
        addButton: 'Add Event',
        listTitle: 'Events',
        emptyMessage: 'No events yet. Add one!',
        itemLabel: 'Event',
        typeOptions: ['Conference', 'Workshop', 'Meeting', 'Party', 'General'],
        hasCheckIn: false,
        hasCheckOut: false,
        hasVerification: false,
        hasGuests: false,
        hasRentalDates: false,
        hasConstructionDates: false,
        hasHRFields: false,
        hasBankingFields: false,
        hasHotelFields: false,
        isSchool: false,
        isRental: false,
        isConstruction: false,
        isHR: false,
        isBanking: false,
        isHotel: false,
        invoiceType: 'invoice'
      },
      storageKey: 'events_v4'
    },
    hotel: {
      id: 'hotel',
      name: 'Hotel Management',
      icon: 'fa-hotel',
      title: 'Hotel',
      itemsLabel: 'Bookings',
      profile: {
        title: 'Hotel Profile',
        subtitle: 'Enter your hotel details for guest management',
        icon: 'fa-hotel',
        fields: [
          { id: 'companyName', label: 'Hotel Name', icon: 'fa-hotel', placeholder: 'Grand Hotel', type: 'text' },
          { id: 'ownerName', label: 'Owner/Manager', icon: 'fa-user-tie', placeholder: 'John Doe', type: 'text' },
          { id: 'companyEmail', label: 'Hotel Email', icon: 'fa-envelope', placeholder: 'info@grandhotel.com', type: 'email' },
          { id: 'companyPhone', label: 'Hotel Phone', icon: 'fa-phone', placeholder: '+1 555 1234', type: 'text' },
          { id: 'companyAddress', label: 'Hotel Address', icon: 'fa-location-dot', placeholder: '123 Resort Rd, City', type: 'text' },
          { id: 'companyGst', label: 'GST/Tax Number', icon: 'fa-receipt', placeholder: 'GST-123456789', type: 'text' },
          { id: 'hotelStar', label: 'Star Rating', icon: 'fa-star', placeholder: '5 Star', type: 'select', options: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star', 'Boutique'] }
        ]
      },
      fields: {
        nameLabel: 'Guest Name',
        bookedByLabel: 'Booked By',
        contactLabel: 'Bookie Number',
        venueLabel: 'Room Number',
        inchargeLabel: 'Staff Assigned',
        inchargePhoneLabel: 'Staff Phone',
        extraLabel: 'No. of Guests',
        addButton: 'Add Booking',
        listTitle: 'Bookings',
        emptyMessage: 'No bookings yet. Add one!',
        itemLabel: 'Booking',
        typeOptions: ['Single Room', 'Double Room', 'Suite', 'Deluxe', 'Presidential'],
        hasCheckIn: true,
        hasCheckOut: true,
        hasVerification: true,
        hasGuests: true,
        hasRentalDates: false,
        hasConstructionDates: false,
        hasHRFields: false,
        hasBankingFields: false,
        hasHotelFields: true,
        isSchool: false,
        isRental: false,
        isConstruction: false,
        isHR: false,
        isBanking: false,
        isHotel: true,
        invoiceType: 'invoice',
        roomIcon: 'fa-door-open',
        showStaffInInvoice: false
      },
      storageKey: 'hotel_v4'
    },
    hospital: {
      id: 'hospital',
      name: 'Hospital Management',
      icon: 'fa-hospital',
      title: 'Hospital',
      itemsLabel: 'Patients',
      profile: {
        title: 'Hospital Profile',
        subtitle: 'Enter your hospital details for patient management',
        icon: 'fa-hospital',
        fields: [
          { id: 'companyName', label: 'Hospital Name', icon: 'fa-hospital', placeholder: 'City Hospital', type: 'text' },
          { id: 'ownerName', label: 'Director/Administrator', icon: 'fa-user-tie', placeholder: 'Dr. John Doe', type: 'text' },
          { id: 'companyEmail', label: 'Hospital Email', icon: 'fa-envelope', placeholder: 'info@cityhospital.com', type: 'email' },
          { id: 'companyPhone', label: 'Hospital Phone', icon: 'fa-phone', placeholder: '+1 555 1234', type: 'text' },
          { id: 'companyAddress', label: 'Hospital Address', icon: 'fa-location-dot', placeholder: '456 Health Ave, City', type: 'text' },
          { id: 'companyGst', label: 'GST/Tax Number', icon: 'fa-receipt', placeholder: 'GST-123456789', type: 'text' },
          { id: 'hospitalType', label: 'Hospital Type', icon: 'fa-building', placeholder: 'Multi-Specialty', type: 'select', options: ['Multi-Specialty', 'General', 'Super-Specialty', 'Teaching', 'Research'] },
          { id: 'hospitalLicense', label: 'License Number', icon: 'fa-certificate', placeholder: 'LIC-123456', type: 'text' },
          { id: 'emergencyNumber', label: 'Emergency Number', icon: 'fa-ambulance', placeholder: '+1 555 9999', type: 'text' }
        ]
      },
      fields: {
        nameLabel: 'Patient Name',
        bookedByLabel: 'Booked By',
        contactLabel: 'Bookie Number',
        venueLabel: 'Room/Ward',
        inchargeLabel: 'Doctor',
        inchargePhoneLabel: 'Doctor Phone',
        extraLabel: 'Department',
        addButton: 'Add Patient',
        listTitle: 'Patients',
        emptyMessage: 'No patients yet. Add one!',
        itemLabel: 'Patient',
        typeOptions: ['General', 'Emergency', 'ICU', 'Maternity', 'Pediatrics'],
        hasCheckIn: false,
        hasCheckOut: false,
        hasVerification: false,
        hasGuests: false,
        hasRentalDates: false,
        hasConstructionDates: false,
        hasHRFields: false,
        hasBankingFields: false,
        hasHotelFields: false,
        isSchool: false,
        isRental: false,
        isConstruction: false,
        isHR: false,
        isBanking: false,
        isHotel: false,
        invoiceType: 'invoice'
      },
      storageKey: 'hospital_v4'
    },
    school: {
      id: 'school',
      name: 'School Management',
      icon: 'fa-school',
      title: 'School',
      itemsLabel: 'Students',
      profile: {
        title: 'School Profile',
        subtitle: 'Enter your school details for student management',
        icon: 'fa-school',
        fields: [
          { id: 'companyName', label: 'School Name', icon: 'fa-school', placeholder: 'Springfield School', type: 'text' },
          { id: 'ownerName', label: 'Principal/Chairman', icon: 'fa-user-tie', placeholder: 'Dr. Jane Smith', type: 'text' },
          { id: 'companyEmail', label: 'School Email', icon: 'fa-envelope', placeholder: 'info@springfield.edu', type: 'email' },
          { id: 'companyPhone', label: 'School Phone', icon: 'fa-phone', placeholder: '+1 555 1234', type: 'text' },
          { id: 'companyAddress', label: 'School Address', icon: 'fa-location-dot', placeholder: '789 Education Blvd, City', type: 'text' },
          { id: 'companyGst', label: 'GST/Tax Number', icon: 'fa-receipt', placeholder: 'GST-123456789', type: 'text' },
          { id: 'schoolBoard', label: 'Education Board', icon: 'fa-graduation-cap', placeholder: 'CBSE', type: 'select', options: ['CBSE', 'ICSE', 'IB', 'State Board', 'IGCSE'] },
          { id: 'schoolAffiliation', label: 'Affiliation Number', icon: 'fa-certificate', placeholder: 'AFF-123456', type: 'text' }
        ]
      },
      fields: {
        nameLabel: 'Student Name',
        bookedByLabel: 'Parent Name',
        contactLabel: 'Parent Phone',
        venueLabel: 'Class/Roll No',
        inchargeLabel: 'Class Teacher',
        inchargePhoneLabel: 'Teacher Phone',
        extraLabel: 'Subject',
        addButton: 'Add Student',
        listTitle: 'Students',
        emptyMessage: 'No students yet. Add one!',
        itemLabel: 'Student',
        typeOptions: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'],
        hasCheckIn: false,
        hasCheckOut: false,
        hasVerification: false,
        hasGuests: false,
        hasRentalDates: false,
        hasConstructionDates: false,
        hasHRFields: false,
        hasBankingFields: false,
        hasHotelFields: false,
        isSchool: true,
        isRental: false,
        isConstruction: false,
        isHR: false,
        isBanking: false,
        isHotel: false,
        invoiceType: 'invoice',
        showInchargeInInvoice: false
      },
      storageKey: 'school_v4'
    },
    rental: {
      id: 'rental',
      name: 'Car Rental Management',
      icon: 'fa-car',
      title: 'Rental',
      itemsLabel: 'Bookings',
      profile: {
        title: 'Car Rental Profile',
        subtitle: 'Enter your car rental company details',
        icon: 'fa-car',
        fields: [
          { id: 'companyName', label: 'Rental Company Name', icon: 'fa-car', placeholder: 'Speedy Rentals', type: 'text' },
          { id: 'ownerName', label: 'Owner/Manager', icon: 'fa-user-tie', placeholder: 'John Doe', type: 'text' },
          { id: 'companyEmail', label: 'Company Email', icon: 'fa-envelope', placeholder: 'info@speedyrentals.com', type: 'email' },
          { id: 'companyPhone', label: 'Company Phone', icon: 'fa-phone', placeholder: '+1 555 1234', type: 'text' },
          { id: 'companyAddress', label: 'Company Address', icon: 'fa-location-dot', placeholder: '123 Auto St, City', type: 'text' },
          { id: 'companyGst', label: 'GST/Tax Number', icon: 'fa-receipt', placeholder: 'GST-123456789', type: 'text' },
          { id: 'rentalLicense', label: 'Rental License', icon: 'fa-certificate', placeholder: 'RENT-123456', type: 'text' },
          { id: 'rentalFleet', label: 'Fleet Size', icon: 'fa-cars', placeholder: '50', type: 'number' }
        ]
      },
      fields: {
        nameLabel: 'Customer Name',
        bookedByLabel: 'Booked By',
        contactLabel: 'Bookie Number',
        venueLabel: 'Vehicle Number',
        inchargeLabel: 'Driver Assigned',
        inchargePhoneLabel: 'Driver Phone',
        extraLabel: 'Vehicle Model',
        addButton: 'Add Booking',
        listTitle: 'Bookings',
        emptyMessage: 'No bookings yet. Add one!',
        itemLabel: 'Booking',
        typeOptions: ['SUV', 'Sedan', 'Hatchback', 'Luxury', 'Electric'],
        hasCheckIn: false,
        hasCheckOut: false,
        hasVerification: true,
        hasGuests: false,
        hasRentalDates: true,
        hasConstructionDates: false,
        hasHRFields: false,
        hasBankingFields: false,
        hasHotelFields: false,
        isSchool: false,
        isRental: true,
        isConstruction: false,
        isHR: false,
        isBanking: false,
        isHotel: false,
        invoiceType: 'invoice'
      },
      storageKey: 'rental_v4'
    },
    retail: {
      id: 'retail',
      name: 'Retail Management',
      icon: 'fa-store',
      title: 'Retail',
      itemsLabel: 'Products',
      profile: {
        title: 'Retail Store Profile',
        subtitle: 'Enter your retail store details',
        icon: 'fa-store',
        fields: [
          { id: 'companyName', label: 'Store Name', icon: 'fa-store', placeholder: 'Mega Mart', type: 'text' },
          { id: 'ownerName', label: 'Owner/Manager', icon: 'fa-user-tie', placeholder: 'John Doe', type: 'text' },
          { id: 'companyEmail', label: 'Store Email', icon: 'fa-envelope', placeholder: 'info@megamart.com', type: 'email' },
          { id: 'companyPhone', label: 'Store Phone', icon: 'fa-phone', placeholder: '+1 555 1234', type: 'text' },
          { id: 'companyAddress', label: 'Store Address', icon: 'fa-location-dot', placeholder: '456 Market St, City', type: 'text' },
          { id: 'companyGst', label: 'GST/Tax Number', icon: 'fa-receipt', placeholder: 'GST-123456789', type: 'text' },
          { id: 'storeType', label: 'Store Type', icon: 'fa-tags', placeholder: 'Department Store', type: 'select', options: ['Department Store', 'Supermarket', 'Boutique', 'Franchise', 'Online'] },
          { id: 'storeTimings', label: 'Store Timings', icon: 'fa-clock', placeholder: '9:00 AM - 9:00 PM', type: 'text' }
        ]
      },
      fields: {
        nameLabel: 'Product Name',
        bookedByLabel: 'Supplier',
        contactLabel: 'Supplier Phone',
        venueLabel: 'SKU Code',
        inchargeLabel: 'Manager',
        inchargePhoneLabel: 'Manager Phone',
        extraLabel: 'Category',
        addButton: 'Add Product',
        listTitle: 'Products',
        emptyMessage: 'No products yet. Add one!',
        itemLabel: 'Product',
        typeOptions: ['Electronics', 'Clothing', 'Food', 'Books', 'Toys', 'Home', 'Sports'],
        hasCheckIn: false,
        hasCheckOut: false,
        hasVerification: false,
        hasGuests: false,
        hasRentalDates: false,
        hasConstructionDates: false,
        hasHRFields: false,
        hasBankingFields: false,
        hasHotelFields: false,
        isSchool: false,
        isRental: false,
        isConstruction: false,
        isHR: false,
        isBanking: false,
        isHotel: false,
        invoiceType: 'invoice'
      },
      storageKey: 'retail_v4'
    },
    construction: {
      id: 'construction',
      name: 'Construction Management',
      icon: 'fa-hard-hat',
      title: 'Construction',
      itemsLabel: 'Construction Sites',
      profile: {
        title: 'Construction Company Profile',
        subtitle: 'Enter your construction company details',
        icon: 'fa-hard-hat',
        fields: [
          { id: 'companyName', label: 'Company Name', icon: 'fa-building', placeholder: 'BuildRight Constructions', type: 'text' },
          { id: 'ownerName', label: 'Owner/Director', icon: 'fa-user-tie', placeholder: 'John Doe', type: 'text' },
          { id: 'companyEmail', label: 'Company Email', icon: 'fa-envelope', placeholder: 'info@buildright.com', type: 'email' },
          { id: 'companyPhone', label: 'Company Phone', icon: 'fa-phone', placeholder: '+1 555 1234', type: 'text' },
          { id: 'companyAddress', label: 'Company Address', icon: 'fa-location-dot', placeholder: '789 Builder Ln, City', type: 'text' },
          { id: 'companyGst', label: 'GST/Tax Number', icon: 'fa-receipt', placeholder: 'GST-123456789', type: 'text' },
          { id: 'constructionLicense', label: 'Contractor License', icon: 'fa-certificate', placeholder: 'CONT-123456', type: 'text' },
          { id: 'constructionSpecialty', label: 'Specialty', icon: 'fa-tools', placeholder: 'Residential', type: 'select', options: ['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Renovation'] }
        ]
      },
      fields: {
        nameLabel: 'Site Name',
        bookedByLabel: 'Client Name',
        contactLabel: 'Client Phone',
        venueLabel: 'Site Location',
        inchargeLabel: 'Project Manager',
        inchargePhoneLabel: 'Manager Phone',
        extraLabel: 'Project Type',
        addButton: 'Add Site',
        listTitle: 'Construction Sites',
        emptyMessage: 'No sites yet. Add one!',
        itemLabel: 'Site',
        typeOptions: ['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Renovation'],
        hasCheckIn: false,
        hasCheckOut: false,
        hasVerification: false,
        hasGuests: false,
        hasRentalDates: false,
        hasConstructionDates: true,
        hasHRFields: false,
        hasBankingFields: false,
        hasHotelFields: false,
        isSchool: false,
        isRental: false,
        isConstruction: true,
        isHR: false,
        isBanking: false,
        isHotel: false,
        invoiceType: 'invoice'
      },
      storageKey: 'construction_v4'
    },
    hr: {
      id: 'hr',
      name: 'HR Management',
      icon: 'fa-users',
      title: 'HR',
      itemsLabel: 'Employees',
      profile: {
        title: 'HR/Company Profile',
        subtitle: 'Enter your company HR details',
        icon: 'fa-users',
        fields: [
          { id: 'companyName', label: 'Company Name', icon: 'fa-building', placeholder: 'Global Tech Inc', type: 'text' },
          { id: 'ownerName', label: 'CEO/Director', icon: 'fa-user-tie', placeholder: 'John Doe', type: 'text' },
          { id: 'companyEmail', label: 'Company Email', icon: 'fa-envelope', placeholder: 'info@globaltech.com', type: 'email' },
          { id: 'companyPhone', label: 'Company Phone', icon: 'fa-phone', placeholder: '+1 555 1234', type: 'text' },
          { id: 'companyAddress', label: 'Company Address', icon: 'fa-location-dot', placeholder: '123 Corporate Tower, City', type: 'text' },
          { id: 'companyGst', label: 'GST/Tax Number', icon: 'fa-receipt', placeholder: 'GST-123456789', type: 'text' },
          { id: 'companySize', label: 'Company Size', icon: 'fa-users', placeholder: '100-500', type: 'select', options: ['1-10', '11-50', '51-200', '201-500', '500+'] },
          { id: 'hrEmail', label: 'HR Department Email', icon: 'fa-envelope', placeholder: 'hr@globaltech.com', type: 'email' },
          { id: 'hrPhone', label: 'HR Department Phone', icon: 'fa-phone', placeholder: '+1 555 9999', type: 'text' }
        ]
      },
      fields: {
        nameLabel: 'Employee Name',
        bookedByLabel: 'Department',
        contactLabel: 'Employee Phone',
        venueLabel: 'Employee ID',
        inchargeLabel: 'Reporting Manager',
        inchargePhoneLabel: 'Manager Phone',
        extraLabel: 'Designation',
        addButton: 'Add Employee',
        listTitle: 'Employees',
        emptyMessage: 'No employees yet. Add one!',
        itemLabel: 'Employee',
        typeOptions: ['Full-Time', 'Part-Time', 'Contract', 'Intern', 'Trainee'],
        hasCheckIn: false,
        hasCheckOut: false,
        hasVerification: false,
        hasGuests: false,
        hasRentalDates: false,
        hasConstructionDates: false,
        hasHRFields: true,
        hasBankingFields: false,
        hasHotelFields: false,
        isSchool: false,
        isRental: false,
        isConstruction: false,
        isHR: true,
        isBanking: false,
        isHotel: false,
        invoiceType: 'payment-slip'
      },
      storageKey: 'hr_v4'
    },
    banking: {
      id: 'banking',
      name: 'Banking Management',
      icon: 'fa-university',
      title: 'Banking',
      itemsLabel: 'Account Holders',
      profile: {
        title: 'Bank Profile',
        subtitle: 'Enter your bank details for account management',
        icon: 'fa-university',
        fields: [
          { id: 'companyName', label: 'Bank Name', icon: 'fa-university', placeholder: 'City Bank', type: 'text' },
          { id: 'ownerName', label: 'Branch Manager', icon: 'fa-user-tie', placeholder: 'John Doe', type: 'text' },
          { id: 'companyEmail', label: 'Bank Email', icon: 'fa-envelope', placeholder: 'info@citybank.com', type: 'email' },
          { id: 'companyPhone', label: 'Bank Phone', icon: 'fa-phone', placeholder: '+1 555 1234', type: 'text' },
          { id: 'companyAddress', label: 'Bank Address', icon: 'fa-location-dot', placeholder: '789 Finance St, City', type: 'text' },
          { id: 'companyGst', label: 'GST/Tax Number', icon: 'fa-receipt', placeholder: 'GST-123456789', type: 'text' },
          { id: 'bankBranchCode', label: 'Branch Code', icon: 'fa-code', placeholder: 'BR-001', type: 'text' },
          { id: 'bankIFSC', label: 'IFSC Code', icon: 'fa-barcode', placeholder: 'CITYBANK001', type: 'text' }
        ]
      },
      fields: {
        nameLabel: 'Account Holder',
        bookedByLabel: 'Account Type',
        contactLabel: 'Account Number',
        venueLabel: 'Branch',
        inchargeLabel: 'Relationship Manager',
        inchargePhoneLabel: 'Manager Phone',
        extraLabel: 'Transaction Type',
        addButton: 'Add Account',
        listTitle: 'Account Holders',
        emptyMessage: 'No accounts yet. Add one!',
        itemLabel: 'Account',
        typeOptions: ['Savings', 'Current', 'Fixed Deposit', 'Recurring Deposit', 'NRI'],
        hasCheckIn: false,
        hasCheckOut: false,
        hasVerification: false,
        hasGuests: false,
        hasRentalDates: false,
        hasConstructionDates: false,
        hasHRFields: false,
        hasBankingFields: true,
        hasHotelFields: false,
        isSchool: false,
        isRental: false,
        isConstruction: false,
        isHR: false,
        isBanking: true,
        isHotel: false,
        invoiceType: 'receipt'
      },
      storageKey: 'banking_v4'
    },
    restaurant: {
      id: 'restaurant',
      name: 'Restaurant Management',
      icon: 'fa-utensils',
      title: 'Restaurant',
      itemsLabel: 'Orders',
      profile: {
        title: 'Restaurant Profile',
        subtitle: 'Enter your restaurant details for order management',
        icon: 'fa-utensils',
        fields: [
          { id: 'companyName', label: 'Restaurant Name', icon: 'fa-utensils', placeholder: 'Taste of India', type: 'text' },
          { id: 'ownerName', label: 'Owner/Chef', icon: 'fa-user-tie', placeholder: 'Chef John Doe', type: 'text' },
          { id: 'companyEmail', label: 'Restaurant Email', icon: 'fa-envelope', placeholder: 'info@tasteofindia.com', type: 'email' },
          { id: 'companyPhone', label: 'Restaurant Phone', icon: 'fa-phone', placeholder: '+1 555 1234', type: 'text' },
          { id: 'companyAddress', label: 'Restaurant Address', icon: 'fa-location-dot', placeholder: '123 Food St, City', type: 'text' },
          { id: 'companyGst', label: 'GST/Tax Number', icon: 'fa-receipt', placeholder: 'GST-123456789', type: 'text' },
          { id: 'restaurantCuisine', label: 'Cuisine Type', icon: 'fa-utensil-spoon', placeholder: 'Indian', type: 'select', options: ['Indian', 'Chinese', 'Italian', 'Mexican', 'Continental', 'Thai', 'Japanese', 'American'] },
          { id: 'restaurantTimings', label: 'Operating Hours', icon: 'fa-clock', placeholder: '10:00 AM - 11:00 PM', type: 'text' }
        ]
      },
      fields: {
        nameLabel: 'Item Name',
        bookedByLabel: 'Order By',
        contactLabel: 'Customer Phone',
        venueLabel: 'Table Number',
        inchargeLabel: 'Chef/Staff',
        inchargePhoneLabel: 'Staff Phone',
        extraLabel: 'Category',
        addButton: 'Add Order',
        listTitle: 'Orders',
        emptyMessage: 'No orders yet. Add one!',
        itemLabel: 'Order',
        typeOptions: ['Appetizer', 'Main Course', 'Dessert', 'Beverage', 'Special'],
        hasCheckIn: false,
        hasCheckOut: false,
        hasVerification: false,
        hasGuests: false,
        hasRentalDates: false,
        hasConstructionDates: false,
        hasHRFields: false,
        hasBankingFields: false,
        hasHotelFields: false,
        isSchool: false,
        isRental: false,
        isConstruction: false,
        isHR: false,
        isBanking: false,
        isHotel: false,
        invoiceType: 'invoice'
      },
      storageKey: 'restaurant_v4'
    }
  };

  // ============================================
  // State
  // ============================================
  let items = [];
  let itemHistory = {};
  let templates = [];
  let emergencyKit = {};
  let companyProfile = {};
  let mapInstance = null;
  let mapPickerInstance = null;
  let selectedLocation = null;
  let currentLanguage = 'en';
  let currentSystem = 'event';
  let uploadedLogo = '';

  // ============================================
  // DOM References
  // ============================================
  const DOM = {
    // System
    systemBadge: document.getElementById('systemBadge'),
    systemTypeLabel: document.getElementById('systemTypeLabel'),
    systemIcon: document.getElementById('systemIcon'),
    systemTitle: document.getElementById('systemTitle'),
    changeSystemBtn: document.getElementById('changeSystemBtn'),
    
    // Management Selection
    selectionPage: document.getElementById('managementSelectionPage'),
    managementCards: document.querySelectorAll('.management-card'),
    
    // Tabs
    tabs: document.querySelectorAll('.nav-tab'),
    tabProfile: document.getElementById('tab-profile'),
    tabAdd: document.getElementById('tab-add'),
    tabItems: document.getElementById('tab-items'),
    addTabLabel: document.getElementById('addTabLabel'),
    itemsTabLabel: document.getElementById('itemsTabLabel'),
    addFormTitle: document.getElementById('addFormTitle'),
    addButtonLabel: document.getElementById('addButtonLabel'),
    itemsListTitle: document.getElementById('itemsListTitle'),
    
    // Profile
    profileIcon: document.getElementById('profileIcon'),
    profileTitle: document.getElementById('profileTitle'),
    profileSubtitle: document.getElementById('profileSubtitle'),
    saveProfileLabel: document.getElementById('saveProfileLabel'),
    companyName: document.getElementById('companyName'),
    ownerName: document.getElementById('ownerName'),
    companyEmail: document.getElementById('companyEmail'),
    companyPhone: document.getElementById('companyPhone'),
    companyAddress: document.getElementById('companyAddress'),
    companyGst: document.getElementById('companyGst'),
    companyLogo: document.getElementById('companyLogo'),
    additionalProfileFields: document.getElementById('additionalProfileFields'),
    saveProfileBtn: document.getElementById('saveProfileBtn'),
    labelCompanyName: document.getElementById('labelCompanyName'),
    labelOwnerName: document.getElementById('labelOwnerName'),
    labelEmail: document.getElementById('labelEmail'),
    labelPhone: document.getElementById('labelPhone'),
    labelAddress: document.getElementById('labelAddress'),
    labelGst: document.getElementById('labelGst'),
    labelLogo: document.getElementById('labelLogo'),
    
    // Logo Upload
    logoUpload: document.getElementById('logoUpload'),
    uploadLogoBtn: document.getElementById('uploadLogoBtn'),
    logoPreview: document.getElementById('logoPreview'),
    logoPreviewImg: document.getElementById('logoPreviewImg'),
    removeLogoBtn: document.getElementById('removeLogoBtn'),
    
    // Add Item Fields
    itemName: document.getElementById('itemName'),
    itemBookedBy: document.getElementById('itemBookedBy'),
    itemContact: document.getElementById('itemContact'),
    itemLocation: document.getElementById('itemLocation'),
    itemAddress: document.getElementById('itemAddress'),
    itemDate: document.getElementById('itemDate'),
    itemTime: document.getElementById('itemTime'),
    itemAmPm: document.getElementById('itemAmPm'),
    itemIncharge: document.getElementById('itemIncharge'),
    itemInchargePhone: document.getElementById('itemInchargePhone'),
    itemExtra: document.getElementById('itemExtra'),
    itemAmount: document.getElementById('itemAmount'),
    itemPriority: document.getElementById('itemPriority'),
    itemType: document.getElementById('itemType'),
    itemVerification: document.getElementById('itemVerification'),
    addItemBtn: document.getElementById('addItemBtn'),
    quickAddBtn: document.getElementById('quickAddBtn'),
    dynamicFormFields: document.getElementById('dynamicFormFields'),
    
    // Hotel Fields
    itemCheckInDate: document.getElementById('itemCheckInDate'),
    itemCheckInTime: document.getElementById('itemCheckInTime'),
    itemCheckInAmPm: document.getElementById('itemCheckInAmPm'),
    itemCheckOutDate: document.getElementById('itemCheckOutDate'),
    itemCheckOutTime: document.getElementById('itemCheckOutTime'),
    itemCheckOutAmPm: document.getElementById('itemCheckOutAmPm'),
    
    // Rental Fields
    itemRentalStart: document.getElementById('itemRentalStart'),
    itemRentalStartTime: document.getElementById('itemRentalStartTime'),
    itemRentalStartAmPm: document.getElementById('itemRentalStartAmPm'),
    itemRentalEnd: document.getElementById('itemRentalEnd'),
    itemRentalEndTime: document.getElementById('itemRentalEndTime'),
    itemRentalEndAmPm: document.getElementById('itemRentalEndAmPm'),
    
    // Construction Fields
    itemConstructionStart: document.getElementById('itemConstructionStart'),
    itemConstructionEnd: document.getElementById('itemConstructionEnd'),
    
    // HR Fields
    itemJoiningDate: document.getElementById('itemJoiningDate'),
    itemEmploymentStatus: document.getElementById('itemEmploymentStatus'),
    itemResignDate: document.getElementById('itemResignDate'),
    itemJobRole: document.getElementById('itemJobRole'),
    itemMonthlySalary: document.getElementById('itemMonthlySalary'),
    itemEmployeePhoto: document.getElementById('itemEmployeePhoto'),
    
    // Banking Fields
    itemOpeningDate: document.getElementById('itemOpeningDate'),
    itemClosingDate: document.getElementById('itemClosingDate'),
    itemTransactionType: document.getElementById('itemTransactionType'),
    
    // Date/Time Fields Container
    dateTimeFields: document.getElementById('dateTimeFields'),
    hotelFields: document.getElementById('hotelFields'),
    rentalFields: document.getElementById('rentalFields'),
    constructionFields: document.getElementById('constructionFields'),
    hrFields: document.getElementById('hrFields'),
    bankingFields: document.getElementById('bankingFields'),
    verificationField: document.getElementById('verificationField'),
    
    // Items List
    itemList: document.getElementById('itemListContainer'),
    itemCounter: document.getElementById('itemCounter'),
    navItemCount: document.getElementById('navItemCount'),
    
    // Other
    todayBtn: document.getElementById('todayAlertBtn'),
    alertBanner: document.getElementById('alertBanner'),
    alertMessage: document.getElementById('alertMessage'),
    alertBadge: document.getElementById('alertBadgeText'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    emergencyBtn: document.getElementById('emergencyBtn'),
    templateSaveBtn: document.getElementById('templateSaveBtn'),
    templateLoadBtn: document.getElementById('templateLoadBtn'),
    openMapPickerBtn: document.getElementById('openMapPickerBtn'),
    closeMapPicker: document.getElementById('closeMapPicker'),
    confirmLocationBtn: document.getElementById('confirmLocationBtn'),
    pickedAddress: document.getElementById('pickedAddress'),
    miniMapContainer: document.getElementById('miniMapContainer'),
    mapPickerContainer: document.getElementById('mapPickerContainer'),
    langToggle: document.getElementById('langToggle'),
    langDropdown: document.getElementById('langDropdown'),
    currentLangLabel: document.getElementById('currentLangLabel'),
    langOptions: document.querySelectorAll('.lang-option')
  };

  // ============================================
  // SPLASH SCREEN
  // ============================================
  function hideSplashScreen() {
    const splash = document.getElementById('splashScreen');
    if (splash) {
      setTimeout(() => {
        splash.classList.add('hide');
        setTimeout(() => {
          splash.style.display = 'none';
        }, 1000);
      }, 2000);
    }
  }

  // ============================================
  // TRANSLATIONS
  // ============================================
  const TRANSLATIONS = {
    en: {
      'tab.profile': 'Profile',
      'tab.add': 'Add',
      'tab.items': 'Items',
      'profile.saved': '✅ Profile saved successfully!',
      'profile.failed': '❌ Failed to save profile.',
      'priority.high': '🔴 High',
      'priority.medium': '🟡 Medium',
      'priority.low': '🟢 Low',
      'quick.quickAdd': 'Quick Add',
      'quick.saveTemplate': 'Save Template',
      'quick.loadTemplate': 'Load Template',
      'quick.emergency': 'Emergency Kit',
      'items.empty': 'No items yet. Add one!',
      'btn.invoice': 'Invoice',
      'btn.map': 'Map',
      'btn.remind': 'Remind',
      'btn.delete': 'Delete',
      'alert.today': '📅 You have an item today!',
      'map.pickLocation': 'Pick Location on Map',
      'map.confirm': 'Confirm',
      'map.confirmed': '✅ Location confirmed and saved!',
      'today.noEvents': '🎯 No items today!',
      'invoice.generating': 'Generating...',
      'invoice.pleaseWait': 'Please wait',
      'invoice.failed': '❌ Failed to generate.',
      'invoice.thankyou': 'Thank you for your business!',
      'invoice.generated': 'Generated on {date}',
      'invoice.message': '🌟 Thank you for choosing us! We hope you had a wonderful experience. Your satisfaction is our priority. Have a great day! 😊',
      'payment.slip': 'Payment Slip',
      'receipt.deposit': 'Deposit Receipt',
      'receipt.withdrawal': 'Withdrawal Receipt'
    }
  };

  // ============================================
  // Data Management
  // ============================================
  function loadAllData() {
    loadItems();
    loadHistory();
    loadTemplates();
    loadEmergencyKit();
    loadCompanyProfile();
    loadDarkMode();
    loadLanguage();
    loadSystem();
  }

  function loadItems() {
    try {
      const system = currentSystem;
      const key = SYSTEMS[system]?.storageKey || APP.storageKey;
      const stored = localStorage.getItem(key);
      items = stored ? JSON.parse(stored) : [];
    } catch { items = []; }
  }

  function saveItems() {
    try {
      const system = currentSystem;
      const key = SYSTEMS[system]?.storageKey || APP.storageKey;
      localStorage.setItem(key, JSON.stringify(items));
    } catch {}
  }

  function loadHistory() {
    try {
      const stored = localStorage.getItem(APP.historyKey);
      itemHistory = stored ? JSON.parse(stored) : {};
    } catch { itemHistory = {}; }
  }

  function saveHistory() {
    try {
      localStorage.setItem(APP.historyKey, JSON.stringify(itemHistory));
    } catch {}
  }

  function loadTemplates() {
    try {
      const stored = localStorage.getItem(APP.templatesKey);
      templates = stored ? JSON.parse(stored) : [];
    } catch { templates = []; }
  }

  function saveTemplates() {
    try {
      localStorage.setItem(APP.templatesKey, JSON.stringify(templates));
    } catch {}
  }

  function loadEmergencyKit() {
    try {
      const stored = localStorage.getItem(APP.emergencyKey);
      emergencyKit = stored ? JSON.parse(stored) : {
        wifiName: '', wifiPassword: '', emergencyContact1: '', emergencyContact2: '', venueNotes: ''
      };
    } catch { emergencyKit = {}; }
  }

  function saveEmergencyKit() {
    try {
      localStorage.setItem(APP.emergencyKey, JSON.stringify(emergencyKit));
    } catch {}
  }

  function loadCompanyProfile() {
    try {
      const stored = localStorage.getItem(APP.profileKey);
      if (stored) {
        companyProfile = JSON.parse(stored);
        populateProfileForm();
        if (companyProfile.companyLogo) {
          showLogoPreview(companyProfile.companyLogo);
        }
      }
    } catch { companyProfile = {}; }
  }

  function saveCompanyProfile() {
    const profile = {
      companyName: DOM.companyName.value.trim(),
      ownerName: DOM.ownerName.value.trim(),
      companyEmail: DOM.companyEmail.value.trim(),
      companyPhone: DOM.companyPhone.value.trim(),
      companyAddress: DOM.companyAddress.value.trim(),
      companyGst: DOM.companyGst.value.trim(),
      companyLogo: DOM.companyLogo.value || uploadedLogo || ''
    };
    
    const system = SYSTEMS[currentSystem];
    if (system && system.profile) {
      system.profile.fields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el && field.id !== 'companyName' && field.id !== 'ownerName' && 
            field.id !== 'companyEmail' && field.id !== 'companyPhone' && 
            field.id !== 'companyAddress' && field.id !== 'companyGst' && 
            field.id !== 'companyLogo') {
          profile[field.id] = el.value.trim();
        }
      });
    }
    
    try {
      localStorage.setItem(APP.profileKey, JSON.stringify(profile));
      companyProfile = profile;
      alert('✅ Profile saved successfully!');
    } catch {
      alert('❌ Failed to save profile.');
    }
  }

  function populateProfileForm() {
    if (companyProfile) {
      DOM.companyName.value = companyProfile.companyName || '';
      DOM.ownerName.value = companyProfile.ownerName || '';
      DOM.companyEmail.value = companyProfile.companyEmail || '';
      DOM.companyPhone.value = companyProfile.companyPhone || '';
      DOM.companyAddress.value = companyProfile.companyAddress || '';
      DOM.companyGst.value = companyProfile.companyGst || '';
      DOM.companyLogo.value = companyProfile.companyLogo || '';
      
      if (companyProfile.companyLogo) {
        showLogoPreview(companyProfile.companyLogo);
      }
      
      const system = SYSTEMS[currentSystem];
      if (system && system.profile) {
        system.profile.fields.forEach(field => {
          if (field.id !== 'companyName' && field.id !== 'ownerName' && 
              field.id !== 'companyEmail' && field.id !== 'companyPhone' && 
              field.id !== 'companyAddress' && field.id !== 'companyGst' && 
              field.id !== 'companyLogo') {
            const el = document.getElementById(field.id);
            if (el && companyProfile[field.id] !== undefined) {
              el.value = companyProfile[field.id] || '';
            }
          }
        });
      }
    }
  }

  // ============================================
  // Logo Upload Functions
  // ============================================
  function showLogoPreview(imageData) {
    DOM.logoPreview.style.display = 'block';
    DOM.logoPreviewImg.src = imageData;
  }

  function hideLogoPreview() {
    DOM.logoPreview.style.display = 'none';
    DOM.logoPreviewImg.src = '';
  }

  function handleLogoUpload() {
    const file = DOM.logoUpload.files[0];
    if (!file) {
      alert('Please select a file first.');
      return;
    }
    
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file.');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageData = e.target.result;
      uploadedLogo = imageData;
      DOM.companyLogo.value = imageData;
      showLogoPreview(imageData);
      DOM.logoUpload.value = '';
    };
    reader.readAsDataURL(file);
  }

  function removeLogo() {
    uploadedLogo = '';
    DOM.companyLogo.value = '';
    hideLogoPreview();
  }

  // ============================================
  // System Management
  // ============================================
  function loadSystem() {
    try {
      const stored = localStorage.getItem(APP.systemKey);
      if (stored && SYSTEMS[stored]) {
        currentSystem = stored;
      }
    } catch {}
    updateSystemUI();
  }

  function saveSystem() {
    try {
      localStorage.setItem(APP.systemKey, currentSystem);
    } catch {}
  }

  function updateProfileFields() {
    const system = SYSTEMS[currentSystem];
    if (!system || !system.profile) return;
    
    const container = DOM.additionalProfileFields;
    container.innerHTML = '';
    
    DOM.profileIcon.className = `fas ${system.profile.icon}`;
    DOM.profileTitle.textContent = system.profile.title;
    DOM.profileSubtitle.textContent = system.profile.subtitle;
    
    const fieldMap = {
      companyName: { label: DOM.labelCompanyName, placeholder: 'Company Name' },
      ownerName: { label: DOM.labelOwnerName, placeholder: 'Owner Name' },
      companyEmail: { label: DOM.labelEmail, placeholder: 'Email' },
      companyPhone: { label: DOM.labelPhone, placeholder: 'Phone' },
      companyAddress: { label: DOM.labelAddress, placeholder: 'Address' },
      companyGst: { label: DOM.labelGst, placeholder: 'GST/Tax Number' },
      companyLogo: { label: DOM.labelLogo, placeholder: 'Logo URL' }
    };
    
    system.profile.fields.forEach(field => {
      if (fieldMap[field.id]) {
        const icon = fieldMap[field.id].label.querySelector('i');
        fieldMap[field.id].label.innerHTML = `${icon.outerHTML} ${field.label}`;
        const input = document.getElementById(field.id);
        if (input) input.placeholder = field.placeholder;
      }
    });
    
    system.profile.fields.forEach(field => {
      if (!fieldMap[field.id]) {
        const row = document.createElement('div');
        row.className = 'form-row';
        
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'field';
        fieldDiv.style.flex = '1 0 100%';
        
        const label = document.createElement('label');
        label.innerHTML = `<i class="fas ${field.icon}"></i> ${field.label}`;
        label.setAttribute('for', field.id);
        
        let input;
        if (field.type === 'select') {
          input = document.createElement('select');
          input.id = field.id;
          field.options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            input.appendChild(option);
          });
        } else {
          input = document.createElement('input');
          input.type = field.type || 'text';
          input.id = field.id;
          input.placeholder = field.placeholder || '';
        }
        
        fieldDiv.appendChild(label);
        fieldDiv.appendChild(input);
        row.appendChild(fieldDiv);
        container.appendChild(row);
      }
    });
  }

  function updateSystemUI() {
    const system = SYSTEMS[currentSystem];
    if (!system) return;
    
    // Update header
    DOM.systemIcon.className = `fas ${system.icon}`;
    DOM.systemTitle.textContent = system.title;
    DOM.systemTypeLabel.textContent = `📋 ${system.name}`;
    
    // Update tabs
    DOM.addTabLabel.textContent = 'Add';
    DOM.itemsTabLabel.textContent = system.itemsLabel || 'Items';
    DOM.addFormTitle.textContent = `Add New ${system.fields.itemLabel}`;
    DOM.addButtonLabel.textContent = system.fields.addButton;
    DOM.itemsListTitle.textContent = system.fields.listTitle;
    
    // Update field labels
    const labels = DOM.dynamicFormFields.querySelectorAll('[data-key]');
    const fieldKeys = ['nameLabel', 'bookedByLabel', 'contactLabel', 'venueLabel', 'inchargeLabel', 'inchargePhoneLabel', 'extraLabel'];
    labels.forEach(label => {
      const key = label.getAttribute('data-key');
      if (fieldKeys.includes(key)) {
        label.textContent = system.fields[key] || key;
      }
    });
    
    // Update placeholder texts
    const placeholders = [
      { id: 'itemName', key: 'nameLabel' },
      { id: 'itemBookedBy', key: 'bookedByLabel' },
      { id: 'itemContact', key: 'contactLabel' },
      { id: 'itemLocation', key: 'venueLabel' },
      { id: 'itemIncharge', key: 'inchargeLabel' },
      { id: 'itemInchargePhone', key: 'inchargePhoneLabel' },
      { id: 'itemExtra', key: 'extraLabel' }
    ];
    placeholders.forEach(p => {
      const el = document.getElementById(p.id);
      if (el) {
        el.placeholder = `Enter ${system.fields[p.key] || p.key}`;
      }
    });
    
    // Update type options
    const typeSelect = DOM.itemType;
    if (typeSelect && system.fields.typeOptions) {
      typeSelect.innerHTML = '';
      system.fields.typeOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        typeSelect.appendChild(option);
      });
    }
    
    // Show/Hide verification field
    if (DOM.verificationField) {
      DOM.verificationField.style.display = system.fields.hasVerification ? 'flex' : 'none';
    }
    
    // Show/Hide Hotel fields
    if (DOM.hotelFields) {
      DOM.hotelFields.style.display = system.fields.hasHotelFields ? 'block' : 'none';
    }
    
    // Show/Hide Rental fields
    if (DOM.rentalFields) {
      DOM.rentalFields.style.display = system.fields.hasRentalDates ? 'block' : 'none';
    }
    
    // Show/Hide Construction fields
    if (DOM.constructionFields) {
      DOM.constructionFields.style.display = system.fields.hasConstructionDates ? 'block' : 'none';
    }
    
    // Show/Hide HR fields
    if (DOM.hrFields) {
      DOM.hrFields.style.display = system.fields.hasHRFields ? 'block' : 'none';
    }
    
    // Show/Hide Banking fields
    if (DOM.bankingFields) {
      DOM.bankingFields.style.display = system.fields.hasBankingFields ? 'block' : 'none';
    }
    
    // Show/Hide Date/Time fields (hide for school, construction, hr, banking)
    if (DOM.dateTimeFields) {
      const hideDateTime = system.isSchool || system.isConstruction || system.isHR || system.isBanking;
      DOM.dateTimeFields.style.display = hideDateTime ? 'none' : 'flex';
    }
    
    // Update profile fields
    updateProfileFields();
    
    // Reload items for this system
    loadItems();
    renderItems();
    updateCounters();
  }

  function switchSystem(systemId) {
    if (SYSTEMS[systemId]) {
      currentSystem = systemId;
      saveSystem();
      updateSystemUI();
      DOM.selectionPage.classList.add('hide');
      document.getElementById('appContainer').style.display = 'block';
    }
  }

  // ============================================
  // Dark Mode
  // ============================================
  function loadDarkMode() {
    try {
      const stored = localStorage.getItem(APP.darkModeKey);
      if (stored !== null) {
        applyDarkMode(JSON.parse(stored));
        return;
      }
    } catch {}
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyDarkMode(prefersDark);
  }

  function applyDarkMode(isDark) {
    const html = document.documentElement;
    if (isDark) {
      html.setAttribute('data-theme', 'dark');
      DOM.darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      html.removeAttribute('data-theme');
      DOM.darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem(APP.darkModeKey, JSON.stringify(isDark));
  }

  function toggleDarkMode() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    applyDarkMode(!isDark);
    setTimeout(() => { 
      if (mapInstance) mapInstance.invalidateSize(); 
      if (mapPickerInstance) mapPickerInstance.invalidateSize();
    }, 300);
  }

  // ============================================
  // Language Management
  // ============================================
  function loadLanguage() {
    try {
      const stored = localStorage.getItem(APP.languageKey);
      if (stored && TRANSLATIONS[stored]) {
        currentLanguage = stored;
      } else {
        const browserLang = navigator.language.split('-')[0];
        if (TRANSLATIONS[browserLang]) {
          currentLanguage = browserLang;
        }
      }
    } catch {
      currentLanguage = 'en';
    }
    updateUI();
    updateLangButton();
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(APP.languageKey, lang);
      currentLanguage = lang;
    } catch {}
  }

  function t(key, params = {}) {
    const translation = TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS.en[key] || key;
    let result = translation;
    for (const [param, value] of Object.entries(params)) {
      result = result.replace(`{${param}}`, value);
    }
    return result;
  }

  function updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (translation) {
        el.textContent = translation;
      }
    });
  }

  function updateLangButton() {
    const langMap = {
      en: 'EN', hi: 'हिं', es: 'ES', fr: 'FR', 
      de: 'DE', zh: '中文', ar: 'عربي', ja: '日本語'
    };
    if (DOM.currentLangLabel) {
      DOM.currentLangLabel.textContent = langMap[currentLanguage] || currentLanguage.toUpperCase();
    }
  }

  function toggleLanguageDropdown() {
    DOM.langDropdown.classList.toggle('active');
  }

  function changeLanguage(lang) {
    if (TRANSLATIONS[lang]) {
      saveLanguage(lang);
      updateUI();
      updateLangButton();
      DOM.langDropdown.classList.remove('active');
    }
  }

  // ============================================
  // Helpers
  // ============================================
  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
  }

  function getTodayString() {
    return new Date().toISOString().split('T')[0];
  }

  function formatDate(dateStr) {
    if (!dateStr) return 'No date';
    try {
      const d = new Date(dateStr + 'T00:00:00');
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch { return dateStr; }
  }

  function formatTime(timeStr, ampm) {
    if (!timeStr) return '--:--';
    return `${timeStr} ${ampm || ''}`;
  }

  function formatCurrency(amount) {
    if (!amount) return '$0';
    const clean = amount.replace(/[^0-9.]/g, '');
    if (!clean) return '$0';
    const num = parseFloat(clean);
    return isNaN(num) ? amount : '$' + num.toFixed(2);
  }

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function getPriorityColor(priority) {
    switch(priority) {
      case 'High': return '#ff4757';
      case 'Medium': return '#ffa502';
      case 'Low': return '#2ed573';
      default: return '#747d8c';
    }
  }

  function getPriorityIcon(priority) {
    switch(priority) {
      case 'High': return '🔴';
      case 'Medium': return '🟡';
      case 'Low': return '🟢';
      default: return '⚪';
    }
  }

  // ============================================
  // Format Extra Field
  // ============================================
  function formatExtraField(extra, systemId) {
    if (!extra) return '<span style="opacity:0.6; font-size:13px;">Not specified</span>';
    
    if (systemId === 'hotel') {
      return `<span class="volunteer-tag"><i class="fas fa-users"></i> ${escapeHtml(extra)} guests</span>`;
    }
    
    const items = extra.split(',').map(s => s.trim()).filter(Boolean);
    return items.map(item => 
      `<span class="volunteer-tag"><i class="fas fa-tag"></i> ${escapeHtml(item)}</span>`
    ).join(' ');
  }

  // ============================================
  // Tabs Navigation
  // ============================================
  function switchTab(tabId) {
    DOM.tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabId);
    });
    
    if (DOM.tabProfile) DOM.tabProfile.classList.toggle('active', tabId === 'profile');
    if (DOM.tabAdd) DOM.tabAdd.classList.toggle('active', tabId === 'add');
    if (DOM.tabItems) DOM.tabItems.classList.toggle('active', tabId === 'items');
    
    if (tabId === 'add') {
      setTimeout(initializeMiniMap, 300);
    }
  }

  // ============================================
  // Map Functions
  // ============================================
  function initializeMiniMap() {
    const container = DOM.miniMapContainer;
    if (!container) return;
    
    if (mapInstance) {
      mapInstance.remove();
      mapInstance = null;
    }
    
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const address = DOM.itemAddress.value || 'Indore, India';
    
    mapInstance = L.map(container, {
      center: [22.7196, 75.8577],
      zoom: 13,
      zoomControl: false,
      attributionControl: false
    });
    
    const tileLayer = isDark 
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    
    L.tileLayer(tileLayer, { maxZoom: 19 }).addTo(mapInstance);
    
    if (address && address.trim().length > 0) {
      geocodeAddress(address, (lat, lon) => {
        mapInstance.setView([lat, lon], 15);
        L.marker([lat, lon]).addTo(mapInstance);
      });
    }
    
    setTimeout(() => mapInstance.invalidateSize(), 300);
  }

  function openMapPicker() {
    const modal = document.getElementById('mapPickerModal');
    modal.style.display = 'flex';
    modal.classList.add('active');
    
    setTimeout(() => {
      const container = DOM.mapPickerContainer;
      if (!container) return;
      
      if (mapPickerInstance) {
        mapPickerInstance.remove();
        mapPickerInstance = null;
      }
      
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      
      mapPickerInstance = L.map(container, {
        center: [40.7128, -74.0060],
        zoom: 13,
        zoomControl: true,
        attributionControl: true
      });
      
      const tileLayer = isDark 
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      
      L.tileLayer(tileLayer, {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 19
      }).addTo(mapPickerInstance);
      
      let marker = null;
      
      mapPickerInstance.on('click', function(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        selectedLocation = { lat, lng };
        
        if (marker) {
          mapPickerInstance.removeLayer(marker);
        }
        
        marker = L.marker([lat, lng]).addTo(mapPickerInstance);
        
        DOM.pickedAddress.value = '⏳ Fetching address...';
        
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`;
        
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data && data.display_name) {
              DOM.pickedAddress.value = data.display_name;
            } else {
              DOM.pickedAddress.value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
            }
          })
          .catch(() => {
            DOM.pickedAddress.value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
          });
      });
      
      const existingAddress = DOM.itemAddress.value;
      if (existingAddress && existingAddress.trim().length > 0) {
        geocodeAddress(existingAddress, (lat, lon) => {
          mapPickerInstance.setView([lat, lon], 15);
          marker = L.marker([lat, lon]).addTo(mapPickerInstance);
          selectedLocation = { lat, lon };
          DOM.pickedAddress.value = existingAddress;
        });
      }
      
      setTimeout(() => mapPickerInstance.invalidateSize(), 300);
    }, 100);
  }

  function closeMapPicker() {
    const modal = document.getElementById('mapPickerModal');
    modal.style.display = 'none';
    modal.classList.remove('active');
    if (mapPickerInstance) {
      mapPickerInstance.remove();
      mapPickerInstance = null;
    }
  }

  function confirmLocation() {
    const address = DOM.pickedAddress.value;
    
    if (address && address.trim().length > 0 && !address.includes('⏳')) {
      DOM.itemAddress.value = address;
      
      if (selectedLocation && mapInstance) {
        mapInstance.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            mapInstance.removeLayer(layer);
          }
        });
        mapInstance.setView([selectedLocation.lat, selectedLocation.lng], 15);
        L.marker([selectedLocation.lat, selectedLocation.lng]).addTo(mapInstance);
      } else {
        geocodeAddress(address, (lat, lon) => {
          if (mapInstance) {
            mapInstance.eachLayer((layer) => {
              if (layer instanceof L.Marker) {
                mapInstance.removeLayer(layer);
              }
            });
            mapInstance.setView([lat, lon], 15);
            L.marker([lat, lon]).addTo(mapInstance);
          }
        });
      }
      
      closeMapPicker();
      alert(t('map.confirmed'));
    } else if (address && address.includes('⏳')) {
      alert('⚠️ Please wait for the address to load or click on the map again.');
    } else {
      alert('⚠️ Please pick a location on the map first.');
    }
  }

  function geocodeAddress(address, callback) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          callback(parseFloat(data[0].lat), parseFloat(data[0].lon));
        } else {
          callback(40.7128, -74.0060);
        }
      })
      .catch(() => callback(40.7128, -74.0060));
  }

  // ============================================
  // Item CRUD
  // ============================================
  function addItem() {
    const system = SYSTEMS[currentSystem];
    const isSchool = system.isSchool;
    const isRental = system.isRental;
    const isConstruction = system.isConstruction;
    const isHR = system.isHR;
    const isBanking = system.isBanking;
    const isHotel = system.isHotel;
    
    const name = DOM.itemName.value.trim() || 'Unnamed';
    const bookedBy = DOM.itemBookedBy.value.trim() || 'Unknown';
    const contact = DOM.itemContact.value.trim() || '';
    const location = DOM.itemLocation.value.trim() || 'TBD';
    const address = DOM.itemAddress.value.trim() || '';
    const date = DOM.itemDate.value;
    const time = DOM.itemTime.value || '';
    const ampm = DOM.itemAmPm.value;
    const incharge = DOM.itemIncharge.value.trim();
    const inchargePhone = DOM.itemInchargePhone.value.trim();
    const extra = DOM.itemExtra.value.trim();
    const amount = DOM.itemAmount.value.trim() || '$0';
    const priority = DOM.itemPriority.value;
    const type = DOM.itemType.value;
    
    // Hotel fields
    const checkInDate = isHotel ? DOM.itemCheckInDate.value : '';
    const checkInTime = isHotel ? DOM.itemCheckInTime.value : '';
    const checkInAmPm = isHotel ? DOM.itemCheckInAmPm.value : 'PM';
    const checkOutDate = isHotel ? DOM.itemCheckOutDate.value : '';
    const checkOutTime = isHotel ? DOM.itemCheckOutTime.value : '';
    const checkOutAmPm = isHotel ? DOM.itemCheckOutAmPm.value : 'PM';
    const verification = DOM.itemVerification ? DOM.itemVerification.value.trim() : '';
    
    // Rental fields
    const rentalStart = isRental ? DOM.itemRentalStart.value : '';
    const rentalStartTime = isRental ? DOM.itemRentalStartTime.value : '';
    const rentalStartAmPm = isRental ? DOM.itemRentalStartAmPm.value : 'PM';
    const rentalEnd = isRental ? DOM.itemRentalEnd.value : '';
    const rentalEndTime = isRental ? DOM.itemRentalEndTime.value : '';
    const rentalEndAmPm = isRental ? DOM.itemRentalEndAmPm.value : 'PM';
    
    // Construction fields
    const constructionStart = isConstruction ? DOM.itemConstructionStart.value : '';
    const constructionEnd = isConstruction ? DOM.itemConstructionEnd.value : '';
    
    // HR fields
    const joiningDate = isHR ? DOM.itemJoiningDate.value : '';
    const employmentStatus = isHR ? DOM.itemEmploymentStatus.value : 'Active';
    const resignDate = isHR ? DOM.itemResignDate.value : '';
    const jobRole = isHR ? DOM.itemJobRole.value.trim() : '';
    const monthlySalary = isHR ? DOM.itemMonthlySalary.value.trim() : '$0';
    let employeePhoto = '';
    if (isHR && DOM.itemEmployeePhoto.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        employeePhoto = e.target.result;
      };
      reader.readAsDataURL(DOM.itemEmployeePhoto.files[0]);
    }
    
    // Banking fields
    const openingDate = isBanking ? DOM.itemOpeningDate.value : '';
    const closingDate = isBanking ? DOM.itemClosingDate.value : '';
    const transactionType = isBanking ? DOM.itemTransactionType.value.trim() : '';

    // Validation
    if (!isSchool && !isConstruction && !isHR && !isBanking && !date) {
      alert('⚠️ Please select a date.');
      return;
    }

    const newItem = {
      id: generateId(),
      name,
      bookedBy,
      contact,
      location,
      address,
      date: isSchool || isConstruction || isHR || isBanking ? '' : date,
      time: isSchool || isConstruction || isHR || isBanking ? '' : time,
      ampm: isSchool || isConstruction || isHR || isBanking ? '' : ampm,
      incharge,
      inchargePhone,
      extra,
      amount,
      priority,
      type,
      verification,
      system: currentSystem,
      createdAt: new Date().toISOString(),
      // Hotel specific
      checkInDate,
      checkInTime,
      checkInAmPm,
      checkOutDate,
      checkOutTime,
      checkOutAmPm,
      // Rental specific
      rentalStart,
      rentalStartTime,
      rentalStartAmPm,
      rentalEnd,
      rentalEndTime,
      rentalEndAmPm,
      // Construction specific
      constructionStart,
      constructionEnd,
      // HR specific
      joiningDate,
      employmentStatus,
      resignDate,
      jobRole,
      monthlySalary,
      employeePhoto,
      // Banking specific
      openingDate,
      closingDate,
      transactionType
    };

    items.push(newItem);
    saveItemHistory(newItem.id, newItem);
    saveAndRender();
    
    // Clear form
    DOM.itemName.value = '';
    DOM.itemBookedBy.value = '';
    DOM.itemContact.value = '';
    DOM.itemLocation.value = '';
    DOM.itemAddress.value = '';
    DOM.itemIncharge.value = '';
    DOM.itemInchargePhone.value = '';
    DOM.itemExtra.value = '';
    DOM.itemAmount.value = '';
    if (DOM.itemVerification) DOM.itemVerification.value = '';
    if (DOM.itemCheckInDate) DOM.itemCheckInDate.value = '';
    if (DOM.itemCheckInTime) DOM.itemCheckInTime.value = '';
    if (DOM.itemCheckOutDate) DOM.itemCheckOutDate.value = '';
    if (DOM.itemCheckOutTime) DOM.itemCheckOutTime.value = '';
    if (DOM.itemRentalStart) DOM.itemRentalStart.value = '';
    if (DOM.itemRentalStartTime) DOM.itemRentalStartTime.value = '';
    if (DOM.itemRentalEnd) DOM.itemRentalEnd.value = '';
    if (DOM.itemRentalEndTime) DOM.itemRentalEndTime.value = '';
    if (DOM.itemConstructionStart) DOM.itemConstructionStart.value = '';
    if (DOM.itemConstructionEnd) DOM.itemConstructionEnd.value = '';
    if (DOM.itemJoiningDate) DOM.itemJoiningDate.value = '';
    if (DOM.itemResignDate) DOM.itemResignDate.value = '';
    if (DOM.itemJobRole) DOM.itemJobRole.value = '';
    if (DOM.itemMonthlySalary) DOM.itemMonthlySalary.value = '';
    if (DOM.itemOpeningDate) DOM.itemOpeningDate.value = '';
    if (DOM.itemClosingDate) DOM.itemClosingDate.value = '';
    if (DOM.itemTransactionType) DOM.itemTransactionType.value = '';
    if (DOM.itemEmployeePhoto) DOM.itemEmployeePhoto.value = '';
    
    switchTab('items');
  }

  function deleteItem(id) {
    const item = items.find(i => i.id === id);
    if (!item) return;
    
    if (confirm(`Delete "${item.name}"?`)) {
      items = items.filter(i => i.id !== id);
      delete itemHistory[id];
      saveHistory();
      saveAndRender();
    }
  }

  function saveAndRender() {
    saveItems();
    renderItems();
    updateCounters();
  }

  // ============================================
  // History
  // ============================================
  function saveItemHistory(itemId, itemData) {
    if (!itemHistory[itemId]) {
      itemHistory[itemId] = [];
    }
    itemHistory[itemId].push({
      timestamp: new Date().toISOString(),
      data: JSON.parse(JSON.stringify(itemData))
    });
    if (itemHistory[itemId].length > 10) {
      itemHistory[itemId].shift();
    }
    saveHistory();
  }

  // ============================================
  // Render Items
  // ============================================
  function renderItems() {
    if (items.length === 0) {
      DOM.itemList.innerHTML = `
        <div class="empty-message">
          <i class="far fa-calendar-times"></i>
          <br>${t('items.empty')}
        </div>
      `;
      return;
    }

    const priorityOrder = { 'High': 0, 'Medium': 1, 'Low': 2 };
    const sorted = [...items].sort((a, b) => 
      (priorityOrder[a.priority] || 1) - (priorityOrder[b.priority] || 1)
    );

    const system = SYSTEMS[currentSystem];
    const isHotel = system.isHotel;
    const isSchool = system.isSchool;
    const isRental = system.isRental;
    const isConstruction = system.isConstruction;
    const isHR = system.isHR;
    const isBanking = system.isBanking;

    let html = '';
    sorted.forEach(item => {
      const priorityColor = getPriorityColor(item.priority);
      const priorityIcon = getPriorityIcon(item.priority);
      const extraTags = formatExtraField(item.extra, currentSystem);
      const incharge = item.incharge || 'Not assigned';
      const inchargePhone = item.inchargePhone || '';

      html += `
        <div class="event-card" data-id="${item.id}">
          <div class="event-name">
            <span>${escapeHtml(item.name)}</span>
            <span class="event-badges">
              <span class="priority-badge" style="background:${priorityColor}20; color:${priorityColor};">
                ${priorityIcon} ${item.priority}
              </span>
              <span class="payee-badge"><i class="fas fa-coins"></i> ${escapeHtml(item.amount)}</span>
            </span>
          </div>
          <div class="event-type-tag">${escapeHtml(item.type || 'General')}</div>
          <div class="event-meta">
            <span class="meta-item"><i class="fas fa-user"></i> ${escapeHtml(item.bookedBy || 'Unknown')}</span>
            ${item.contact ? `<span class="meta-item"><i class="fas fa-phone"></i> ${escapeHtml(item.contact)}</span>` : ''}
            ${!isSchool && !isConstruction && !isHR && !isBanking ? `<span class="meta-item"><i class="fas fa-map-marker-alt"></i> ${escapeHtml(item.location)}</span>` : ''}
            ${isHotel ? `<span class="meta-item"><i class="fas fa-door-open"></i> Room: ${escapeHtml(item.location)}</span>` : ''}
            ${isRental ? `<span class="meta-item"><i class="fas fa-car"></i> Vehicle: ${escapeHtml(item.location)}</span>` : ''}
            ${isConstruction ? `<span class="meta-item"><i class="fas fa-hard-hat"></i> Site: ${escapeHtml(item.location)}</span>` : ''}
            ${isHR ? `<span class="meta-item"><i class="fas fa-id-badge"></i> ID: ${escapeHtml(item.location)}</span>` : ''}
            ${isBanking ? `<span class="meta-item"><i class="fas fa-university"></i> Branch: ${escapeHtml(item.location)}</span>` : ''}
            ${isSchool ? `<span class="meta-item"><i class="fas fa-chalkboard"></i> Class: ${escapeHtml(item.location)}</span>` : ''}
            ${item.extra && isHotel ? `<span class="meta-item"><i class="fas fa-users"></i> ${escapeHtml(item.extra)} guests</span>` : ''}
            ${item.extra && !isHotel ? `<span class="meta-item"><i class="fas fa-info-circle"></i> ${escapeHtml(item.extra)}</span>` : ''}
            ${!isSchool && !isConstruction && !isHR && !isBanking ? `<span class="meta-item"><i class="far fa-calendar-alt"></i> ${formatDate(item.date)}</span>` : ''}
            ${!isSchool && !isConstruction && !isHR && !isBanking ? `<span class="meta-item"><i class="far fa-clock"></i> ${item.time || '--:--'} ${item.ampm || ''}</span>` : ''}
          </div>
          
          ${isHotel && (item.checkInDate || item.checkOutDate) ? `
            <div class="booking-dates">
              ${item.checkInDate ? `<span class="date-item check-in"><i class="fas fa-sign-in-alt" style="color:#2ed573;"></i> Check In: ${formatDate(item.checkInDate)} ${item.checkInTime ? item.checkInTime : ''} ${item.checkInAmPm || ''}</span>` : ''}
              ${item.checkOutDate ? `<span class="date-item check-out"><i class="fas fa-sign-out-alt" style="color:#ff6b6b;"></i> Check Out: ${formatDate(item.checkOutDate)} ${item.checkOutTime ? item.checkOutTime : ''} ${item.checkOutAmPm || ''}</span>` : ''}
            </div>
          ` : ''}
          
          ${isRental && (item.rentalStart || item.rentalEnd) ? `
            <div class="booking-dates">
              ${item.rentalStart ? `<span class="date-item" style="color:#2ed573;"><i class="fas fa-calendar-plus"></i> Start: ${formatDate(item.rentalStart)} ${item.rentalStartTime ? item.rentalStartTime : ''} ${item.rentalStartAmPm || ''}</span>` : ''}
              ${item.rentalEnd ? `<span class="date-item" style="color:#ff6b6b;"><i class="fas fa-calendar-minus"></i> End: ${formatDate(item.rentalEnd)} ${item.rentalEndTime ? item.rentalEndTime : ''} ${item.rentalEndAmPm || ''}</span>` : ''}
            </div>
          ` : ''}
          
          ${isConstruction && (item.constructionStart || item.constructionEnd) ? `
            <div class="booking-dates">
              ${item.constructionStart ? `<span class="date-item" style="color:#2ed573;"><i class="fas fa-play-circle"></i> Start: ${formatDate(item.constructionStart)}</span>` : ''}
              ${item.constructionEnd ? `<span class="date-item" style="color:#ff6b6b;"><i class="fas fa-flag-checkered"></i> End: ${formatDate(item.constructionEnd)}</span>` : ''}
            </div>
          ` : ''}
          
          ${isHR && item.joiningDate ? `
            <div class="booking-dates">
              <span class="date-item" style="color:#2ed573;"><i class="fas fa-calendar-plus"></i> Joined: ${formatDate(item.joiningDate)}</span>
              ${item.resignDate ? `<span class="date-item" style="color:#ff6b6b;"><i class="fas fa-calendar-minus"></i> Resigned: ${formatDate(item.resignDate)}</span>` : ''}
              <span class="date-item"><i class="fas fa-${item.employmentStatus === 'Active' ? 'check-circle' : item.employmentStatus === 'Resigned' ? 'times-circle' : 'pause-circle'}"></i> Status: ${item.employmentStatus || 'Active'}</span>
            </div>
          ` : ''}
          
          ${isBanking && item.openingDate ? `
            <div class="booking-dates">
              <span class="date-item" style="color:#2ed573;"><i class="fas fa-calendar-plus"></i> Opened: ${formatDate(item.openingDate)}</span>
              ${item.closingDate ? `<span class="date-item" style="color:#ff6b6b;"><i class="fas fa-calendar-minus"></i> Closed: ${formatDate(item.closingDate)}</span>` : ''}
            </div>
          ` : ''}
          
          ${isHotel && item.verification ? `
            <div class="event-meta" style="margin-top:-2px;">
              <span class="meta-item"><i class="fas fa-id-card"></i> Verified: ${escapeHtml(item.verification)}</span>
            </div>
          ` : ''}
          
          ${isRental && item.verification ? `
            <div class="event-meta" style="margin-top:-2px;">
              <span class="meta-item"><i class="fas fa-id-card"></i> Verified: ${escapeHtml(item.verification)}</span>
            </div>
          ` : ''}
          
          ${isHR && item.jobRole ? `
            <div class="event-meta" style="margin-top:-2px;">
              <span class="meta-item"><i class="fas fa-briefcase"></i> ${escapeHtml(item.jobRole)}</span>
              ${item.monthlySalary ? `<span class="meta-item"><i class="fas fa-dollar-sign"></i> ${escapeHtml(item.monthlySalary)}/month</span>` : ''}
            </div>
          ` : ''}
          
          ${isBanking && item.transactionType ? `
            <div class="event-meta" style="margin-top:-2px;">
              <span class="meta-item"><i class="fas fa-exchange-alt"></i> ${escapeHtml(item.transactionType)}</span>
            </div>
          ` : ''}
          
          ${item.address ? `
            <div class="event-meta" style="margin-top:-2px;">
              <span class="meta-item"><i class="fas fa-location-dot"></i> ${escapeHtml(item.address)}</span>
            </div>
          ` : ''}
          
          <div class="incharge-section">
            <i class="fas fa-user-tie"></i> ${escapeHtml(incharge)} ${inchargePhone ? '📞 ' + escapeHtml(inchargePhone) : ''}
          </div>
          
          <div class="event-actions">
            <button class="pdf-btn" data-id="${item.id}"><i class="fas fa-file-invoice"></i> ${isHR ? 'Payment Slip' : isBanking ? 'Receipt' : t('btn.invoice')}</button>
            <button class="map-btn" data-id="${item.id}"><i class="fas fa-map"></i> ${t('btn.map')}</button>
            <button class="remind-btn" data-id="${item.id}"><i class="fas fa-bell"></i> ${t('btn.remind')}</button>
            <button class="delete-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i> ${t('btn.delete')}</button>
          </div>
        </div>
      `;
    });

    DOM.itemList.innerHTML = html;
    attachEventListeners();
  }

  function updateCounters() {
    const count = items.length;
    DOM.itemCounter.textContent = count;
    DOM.navItemCount.textContent = count;
    
    const todayStr = getTodayString();
    const todayItems = items.filter(item => item.date === todayStr);
    if (todayItems.length > 0) {
      DOM.alertBanner.style.display = 'flex';
      DOM.alertMessage.textContent = `📅 ${todayItems.length} item${todayItems.length > 1 ? 's' : ''} today!`;
      DOM.alertBadge.textContent = `🔔 ${todayItems.length}`;
    } else {
      DOM.alertBanner.style.display = 'none';
      DOM.alertBadge.textContent = 'Today?';
    }
  }

  // ============================================
  // Event Listeners
  // ============================================
  function attachEventListeners() {
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        deleteItem(btn.dataset.id);
      };
    });

    document.querySelectorAll('.remind-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const item = items.find(i => i.id === btn.dataset.id);
        if (item) {
          let msg = `🔔 REMINDER: "${item.name}"\n`;
          msg += `📍 ${item.location}\n`;
          if (item.date) msg += `📅 ${formatDate(item.date)} ${item.time || ''} ${item.ampm || ''}\n`;
          if (item.checkInDate) msg += `📥 Check In: ${formatDate(item.checkInDate)}\n`;
          if (item.checkOutDate) msg += `📤 Check Out: ${formatDate(item.checkOutDate)}\n`;
          if (item.rentalStart) msg += `📥 Rental Start: ${formatDate(item.rentalStart)}\n`;
          if (item.rentalEnd) msg += `📤 Rental End: ${formatDate(item.rentalEnd)}\n`;
          if (item.joiningDate) msg += `📥 Joined: ${formatDate(item.joiningDate)}\n`;
          if (item.resignDate) msg += `📤 Resigned: ${formatDate(item.resignDate)}\n`;
          if (item.openingDate) msg += `📥 Opened: ${formatDate(item.openingDate)}\n`;
          if (item.closingDate) msg += `📤 Closed: ${formatDate(item.closingDate)}\n`;
          msg += `👤 ${item.incharge || 'Not assigned'}`;
          if (item.contact) {
            msg += `\n📞 Contact: ${item.contact}`;
          }
          alert(msg);
        }
      };
    });

    document.querySelectorAll('.pdf-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const item = items.find(i => i.id === btn.dataset.id);
        if (item) generateInvoice(item);
      };
    });

    document.querySelectorAll('.map-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const item = items.find(i => i.id === btn.dataset.id);
        if (item) showItemMap(item);
      };
    });
  }

  // ============================================
  // Invoice/Receipt Generation
  // ============================================
  function generateInvoice(item) {
    if (!item) {
      alert('❌ Item not found!');
      return;
    }

    const system = SYSTEMS[currentSystem];
    const isHotel = system.isHotel;
    const isSchool = system.isSchool;
    const isRental = system.isRental;
    const isConstruction = system.isConstruction;
    const isHR = system.isHR;
    const isBanking = system.isBanking;
    const invoiceType = system.invoiceType || 'invoice';

    const company = companyProfile || {};
    const companyName = company.companyName || 'Your Company';
    const ownerName = company.ownerName || '';
    const companyEmail = company.companyEmail || '';
    const companyPhone = company.companyPhone || '';
    const companyAddress = company.companyAddress || '';
    const companyGst = company.companyGst || '';
    const logoUrl = company.companyLogo || '';
    const formattedAmount = formatCurrency(item.amount);
    const sweetMessage = t('invoice.message');

    let title = 'INVOICE';
    if (isHR) title = 'PAYMENT SLIP';
    else if (isBanking) title = item.transactionType?.toLowerCase().includes('withdrawal') ? 'WITHDRAWAL RECEIPT' : 'DEPOSIT RECEIPT';

    // Extract verification type only (not full details) for Rental/Hotel
    let verificationDisplay = '';
    if (item.verification && (isHotel || isRental)) {
      const parts = item.verification.split(',');
      verificationDisplay = parts[0] || item.verification;
    }

    const loadingMsg = document.createElement('div');
    loadingMsg.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      backdrop-filter: blur(4px);
    `;
    loadingMsg.innerHTML = `
      <div style="background: white; padding: 40px 50px; border-radius: 16px; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 400px;">
        <div style="font-size: 50px; margin-bottom: 15px;">📄</div>
        <div style="font-weight: 700; font-size: 18px; color: #1e2b3a;">${t('invoice.generating')}</div>
        <div style="font-size: 14px; color: #6d7f92; margin-top: 8px;">${t('invoice.pleaseWait')}</div>
        <div style="margin-top: 20px; width: 100%; height: 4px; background: #e7ecf3; border-radius: 4px; overflow: hidden;">
          <div style="width: 40%; height: 100%; background: #3b7cff; border-radius: 4px; animation: loadingProgress 1.5s infinite ease-in-out;"></div>
        </div>
      </div>
    `;
    document.body.appendChild(loadingMsg);

    // Build invoice HTML based on system type
    let detailsHTML = '';
    
    if (isHotel) {
      detailsHTML = `
        <div><span style="color: #6d7f92;">Guest:</span> <strong>${escapeHtml(item.name)}</strong></div>
        <div><span style="color: #6d7f92;">Booked By:</span> <strong>${escapeHtml(item.bookedBy || 'Unknown')}</strong></div>
        ${item.contact ? `<div><span style="color: #6d7f92;">Bookie Number:</span> <strong>${escapeHtml(item.contact)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Room Type:</span> <strong>${escapeHtml(item.type || 'General')}</strong></div>
        <div><span style="color: #6d7f92;">Room Number:</span> <strong>${escapeHtml(item.location)}</strong></div>
        ${item.extra ? `<div><span style="color: #6d7f92;">Guests:</span> <strong>${escapeHtml(item.extra)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Booking Date:</span> <strong>${formatDate(item.date)} ${item.time || ''} ${item.ampm || ''}</strong></div>
        ${item.checkInDate ? `<div><span style="color: #6d7f92;">Check In:</span> <strong>${formatDate(item.checkInDate)} ${item.checkInTime || ''} ${item.checkInAmPm || ''}</strong></div>` : ''}
        ${item.checkOutDate ? `<div><span style="color: #6d7f92;">Check Out:</span> <strong>${formatDate(item.checkOutDate)} ${item.checkOutTime || ''} ${item.checkOutAmPm || ''}</strong></div>` : ''}
        ${verificationDisplay ? `<div><span style="color: #6d7f92;">Verified By:</span> <strong>${escapeHtml(verificationDisplay)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Address:</span> <strong>${escapeHtml(item.address || 'Not provided')}</strong></div>
      `;
    } else if (isRental) {
      detailsHTML = `
        <div><span style="color: #6d7f92;">Customer:</span> <strong>${escapeHtml(item.name)}</strong></div>
        <div><span style="color: #6d7f92;">Booked By:</span> <strong>${escapeHtml(item.bookedBy || 'Unknown')}</strong></div>
        ${item.contact ? `<div><span style="color: #6d7f92;">Bookie Number:</span> <strong>${escapeHtml(item.contact)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Vehicle Model:</span> <strong>${escapeHtml(item.extra || 'Not specified')}</strong></div>
        <div><span style="color: #6d7f92;">Vehicle Number:</span> <strong>${escapeHtml(item.location)}</strong></div>
        <div><span style="color: #6d7f92;">Vehicle Type:</span> <strong>${escapeHtml(item.type || 'General')}</strong></div>
        ${item.rentalStart ? `<div><span style="color: #6d7f92;">Rental Start:</span> <strong>${formatDate(item.rentalStart)} ${item.rentalStartTime || ''} ${item.rentalStartAmPm || ''}</strong></div>` : ''}
        ${item.rentalEnd ? `<div><span style="color: #6d7f92;">Rental End:</span> <strong>${formatDate(item.rentalEnd)} ${item.rentalEndTime || ''} ${item.rentalEndAmPm || ''}</strong></div>` : ''}
        ${verificationDisplay ? `<div><span style="color: #6d7f92;">Verified By:</span> <strong>${escapeHtml(verificationDisplay)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Address:</span> <strong>${escapeHtml(item.address || 'Not provided')}</strong></div>
      `;
    } else if (isSchool) {
      detailsHTML = `
        <div><span style="color: #6d7f92;">Student:</span> <strong>${escapeHtml(item.name)}</strong></div>
        <div><span style="color: #6d7f92;">Parent:</span> <strong>${escapeHtml(item.bookedBy || 'Unknown')}</strong></div>
        ${item.contact ? `<div><span style="color: #6d7f92;">Parent Phone:</span> <strong>${escapeHtml(item.contact)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Class:</span> <strong>${escapeHtml(item.location)}</strong></div>
        <div><span style="color: #6d7f92;">Class Teacher:</span> <strong>${escapeHtml(item.incharge || 'Not assigned')}</strong></div>
        ${item.extra ? `<div><span style="color: #6d7f92;">Subject:</span> <strong>${escapeHtml(item.extra)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Address:</span> <strong>${escapeHtml(item.address || 'Not provided')}</strong></div>
      `;
    } else if (isConstruction) {
      detailsHTML = `
        <div><span style="color: #6d7f92;">Site Name:</span> <strong>${escapeHtml(item.name)}</strong></div>
        <div><span style="color: #6d7f92;">Client:</span> <strong>${escapeHtml(item.bookedBy || 'Unknown')}</strong></div>
        ${item.contact ? `<div><span style="color: #6d7f92;">Client Phone:</span> <strong>${escapeHtml(item.contact)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Site Location:</span> <strong>${escapeHtml(item.location)}</strong></div>
        <div><span style="color: #6d7f92;">Project Type:</span> <strong>${escapeHtml(item.extra || 'General')}</strong></div>
        ${item.constructionStart ? `<div><span style="color: #6d7f92;">Start Date:</span> <strong>${formatDate(item.constructionStart)}</strong></div>` : ''}
        ${item.constructionEnd ? `<div><span style="color: #6d7f92;">End Date:</span> <strong>${formatDate(item.constructionEnd)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Address:</span> <strong>${escapeHtml(item.address || 'Not provided')}</strong></div>
      `;
    } else if (isHR) {
      detailsHTML = `
        <div><span style="color: #6d7f92;">Employee:</span> <strong>${escapeHtml(item.name)}</strong></div>
        <div><span style="color: #6d7f92;">Department:</span> <strong>${escapeHtml(item.bookedBy || 'Unknown')}</strong></div>
        ${item.contact ? `<div><span style="color: #6d7f92;">Phone:</span> <strong>${escapeHtml(item.contact)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Employee ID:</span> <strong>${escapeHtml(item.location)}</strong></div>
        <div><span style="color: #6d7f92;">Designation:</span> <strong>${escapeHtml(item.extra || 'Not specified')}</strong></div>
        <div><span style="color: #6d7f92;">Job Role:</span> <strong>${escapeHtml(item.jobRole || 'Not specified')}</strong></div>
        ${item.joiningDate ? `<div><span style="color: #6d7f92;">Joining Date:</span> <strong>${formatDate(item.joiningDate)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Employment Status:</span> <strong>${escapeHtml(item.employmentStatus || 'Active')}</strong></div>
        ${item.resignDate ? `<div><span style="color: #6d7f92;">Resignation Date:</span> <strong>${formatDate(item.resignDate)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Monthly Salary:</span> <strong>${escapeHtml(item.monthlySalary || '$0')}</strong></div>
        <div><span style="color: #6d7f92;">Address:</span> <strong>${escapeHtml(item.address || 'Not provided')}</strong></div>
      `;
    } else if (isBanking) {
      detailsHTML = `
        <div><span style="color: #6d7f92;">Account Holder:</span> <strong>${escapeHtml(item.name)}</strong></div>
        <div><span style="color: #6d7f92;">Account Type:</span> <strong>${escapeHtml(item.bookedBy || 'Unknown')}</strong></div>
        <div><span style="color: #6d7f92;">Account Number:</span> <strong>${escapeHtml(item.contact || 'Not provided')}</strong></div>
        <div><span style="color: #6d7f92;">Branch:</span> <strong>${escapeHtml(item.location)}</strong></div>
        <div><span style="color: #6d7f92;">Transaction Type:</span> <strong>${escapeHtml(item.transactionType || 'Deposit')}</strong></div>
        ${item.openingDate ? `<div><span style="color: #6d7f92;">Account Opening Date:</span> <strong>${formatDate(item.openingDate)}</strong></div>` : ''}
        ${item.closingDate ? `<div><span style="color: #6d7f92;">Closing Date:</span> <strong>${formatDate(item.closingDate)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Address:</span> <strong>${escapeHtml(item.address || 'Not provided')}</strong></div>
      `;
    } else {
      // Default/Event
      detailsHTML = `
        <div><span style="color: #6d7f92;">Item:</span> <strong>${escapeHtml(item.name)}</strong></div>
        <div><span style="color: #6d7f92;">Booked By:</span> <strong>${escapeHtml(item.bookedBy || 'Unknown')}</strong></div>
        ${item.contact ? `<div><span style="color: #6d7f92;">Contact:</span> <strong>${escapeHtml(item.contact)}</strong></div>` : ''}
        <div><span style="color: #6d7f92;">Type:</span> <strong>${escapeHtml(item.type || 'General')}</strong></div>
        <div><span style="color: #6d7f92;">Location:</span> <strong>${escapeHtml(item.location)}</strong></div>
        <div><span style="color: #6d7f92;">Date:</span> <strong>${formatDate(item.date)} ${item.time || ''} ${item.ampm || ''}</strong></div>
        <div><span style="color: #6d7f92;">Address:</span> <strong>${escapeHtml(item.address || 'Not provided')}</strong></div>
      `;
    }

    const invoiceHTML = `
      <div id="invoiceContainer" style="font-family: 'Arial', 'Helvetica', sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; background: #ffffff; color: #1e2b3a; border: 1px solid #e7ecf3; border-radius: 12px;">
        <div style="display: flex; justify-content: space-between; border-bottom: 3px solid #3b7cff; padding-bottom: 20px; margin-bottom: 25px; flex-wrap: wrap;">
          <div>
            ${logoUrl ? `<img src="${logoUrl}" style="max-height:60px; margin-bottom:10px;" onerror="this.style.display='none'">` : ''}
            <h1 style="color: #3b7cff; font-size: 30px; margin: 0;">${title}</h1>
            <p style="color: #6d7f92; font-size: 14px; margin: 5px 0 0;">#${item.id.slice(0, 8).toUpperCase()}</p>
          </div>
          <div style="text-align: right; min-width: 200px;">
            <div style="font-size: 22px; font-weight: 700; color: #1e2b3a;">${escapeHtml(companyName)}</div>
            ${ownerName ? `<div style="font-size: 13px; color: #6d7f92;">${escapeHtml(ownerName)}</div>` : ''}
            ${companyAddress ? `<div style="font-size: 13px; color: #6d7f92;">${escapeHtml(companyAddress)}</div>` : ''}
            ${companyPhone ? `<div style="font-size: 13px; color: #6d7f92;">📞 ${escapeHtml(companyPhone)}</div>` : ''}
            ${companyEmail ? `<div style="font-size: 13px; color: #6d7f92;">✉ ${escapeHtml(companyEmail)}</div>` : ''}
            ${companyGst ? `<div style="font-size: 13px; color: #1e2b3a; font-weight: 600;">GST: ${escapeHtml(companyGst)}</div>` : ''}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; background: #f8faff; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
          <div>
            <h3 style="color: #3b7cff; font-size: 16px; margin: 0 0 10px;">📋 Details</h3>
            <div style="font-size: 14px; line-height: 2;">
              ${detailsHTML}
            </div>
          </div>
          <div>
            <h3 style="color: #3b7cff; font-size: 16px; margin: 0 0 10px;">📞 Contact</h3>
            <div style="font-size: 14px; line-height: 2;">
              <div><span style="color: #6d7f92;">Staff:</span> <strong>${escapeHtml(isSchool ? item.incharge || 'Not assigned' : item.incharge || 'Not assigned')}</strong></div>
              ${!isSchool && !isHR ? `<div><span style="color: #6d7f92;">Staff Phone:</span> <strong>${escapeHtml(item.inchargePhone || 'Not provided')}</strong></div>` : ''}
            </div>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background: #3b7cff; color: white;">
              <th style="padding: 12px 16px; text-align: left; font-size: 14px;">Description</th>
              <th style="padding: 12px 16px; text-align: right; font-size: 14px;">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e7ecf3;">
              <td style="padding: 12px 16px;">${isHR ? 'Salary Payment - ' : isBanking ? 'Transaction - ' : ''}${escapeHtml(item.name)}</td>
              <td style="padding: 12px 16px; text-align: right;">${formattedAmount}</td>
            </tr>
            ${isHotel && item.extra ? `
              <tr style="border-bottom: 1px solid #e7ecf3;">
                <td style="padding: 12px 16px; color: #6d7f92;">${escapeHtml(item.extra)} Guests</td>
                <td style="padding: 12px 16px; text-align: right; color: #6d7f92;">Included</td>
              </tr>
            ` : ''}
            ${isHR && item.monthlySalary ? `
              <tr style="border-bottom: 1px solid #e7ecf3;">
                <td style="padding: 12px 16px; color: #6d7f92;">Monthly Salary</td>
                <td style="padding: 12px 16px; text-align: right; color: #6d7f92;">${escapeHtml(item.monthlySalary)}</td>
              </tr>
            ` : ''}
            <tr style="font-weight: 700; font-size: 18px; border-top: 2px solid #3b7cff;">
              <td style="padding: 16px 16px;">TOTAL AMOUNT</td>
              <td style="padding: 16px 16px; text-align: right; color: #3b7cff;">${formattedAmount}</td>
            </tr>
          </tbody>
        </table>

        ${!isHR && !isBanking ? `
          <div class="invoice-message">
            <i class="fas fa-heart"></i>
            <span>${sweetMessage}</span>
          </div>
        ` : ''}

        <div style="border-top: 2px solid #e7ecf3; padding-top: 20px; margin-top: 25px; text-align: center; font-size: 12px; color: #9aabba;">
          <p style="margin: 4px 0;"><strong style="color: #1e2b3a;">${escapeHtml(companyName)}</strong> - Thank you!</p>
          <p style="margin: 4px 0;">${t('invoice.generated', { date: new Date().toLocaleString() })}</p>
        </div>
      </div>
    `;

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = invoiceHTML;
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '0';
    tempContainer.style.width = '800px';
    tempContainer.style.background = 'white';
    tempContainer.style.padding = '20px';
    document.body.appendChild(tempContainer);

    const invoiceElement = tempContainer.querySelector('#invoiceContainer');
    html2canvas(invoiceElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: 800,
      height: invoiceElement.scrollHeight + 40
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = pdfHeight;
      let position = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }
      
      const filename = isHR ? `PaymentSlip_${item.name.replace(/\s+/g, '_')}` : 
                       isBanking ? `Receipt_${item.name.replace(/\s+/g, '_')}` : 
                       `Invoice_${item.name.replace(/\s+/g, '_')}`;
      pdf.save(`${filename}_${Date.now()}.pdf`);
      document.body.removeChild(tempContainer);
      document.body.removeChild(loadingMsg);
    }).catch(err => {
      console.error(err);
      document.body.removeChild(tempContainer);
      document.body.removeChild(loadingMsg);
      alert('❌ Failed to generate.');
    });
  }

  // ============================================
  // Show Item Map
  // ============================================
  function showItemMap(item) {
    const address = item.address || item.location || 'New York, NY';
    
    const modal = document.createElement('div');
    modal.className = 'map-modal active';
    modal.id = 'itemMapModal';
    modal.innerHTML = `
      <div class="map-modal-content">
        <div class="map-modal-header">
          <h3>📍 ${escapeHtml(item.name)}</h3>
          <button class="map-modal-close" onclick="this.closest('.map-modal').remove()"><i class="fas fa-times"></i></button>
        </div>
        <div id="itemMapContainer" style="height:400px; border-radius:12px; overflow:hidden;"></div>
        <div style="margin-top:10px; padding:10px; background:var(--section-bg); border-radius:10px;">
          <p style="margin:0; color:var(--text-medium); font-size:14px;">
            <strong>📍</strong> ${escapeHtml(address)}
          </p>
          ${item.contact ? `<p style="margin:5px 0 0 0; color:var(--text-muted); font-size:13px;">
            <strong>📞 Contact:</strong> ${escapeHtml(item.contact)}
          </p>` : ''}
          ${item.extra && SYSTEMS[currentSystem]?.isHotel ? `<p style="margin:5px 0 0 0; color:var(--text-muted); font-size:13px;">
            <strong>👥 Guests:</strong> ${escapeHtml(item.extra)}
          </p>` : ''}
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });

    setTimeout(() => {
      const container = document.getElementById('itemMapContainer');
      if (!container) return;
      
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const map = L.map(container, { center: [40.7128, -74.0060], zoom: 13 });
      
      const tileLayer = isDark 
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      
      L.tileLayer(tileLayer, { attribution: '&copy; OpenStreetMap', maxZoom: 19 }).addTo(map);
      
      geocodeAddress(address, (lat, lon) => {
        map.setView([lat, lon], 15);
        L.marker([lat, lon])
          .addTo(map)
          .bindPopup(`<strong>${escapeHtml(item.name)}</strong><br>${escapeHtml(address)}`)
          .openPopup();
      });
      
      setTimeout(() => map.invalidateSize(), 300);
    }, 100);
  }

  // ============================================
  // Templates
  // ============================================
  function saveTemplate() {
    const system = SYSTEMS[currentSystem];
    const name = DOM.itemName.value.trim() || 'Untitled Template';
    const template = {
      id: generateId(),
      name,
      system: currentSystem,
      location: DOM.itemLocation.value.trim(),
      address: DOM.itemAddress.value.trim(),
      contact: DOM.itemContact.value.trim(),
      time: DOM.itemTime.value,
      ampm: DOM.itemAmPm.value,
      incharge: DOM.itemIncharge.value.trim(),
      inchargePhone: DOM.itemInchargePhone.value.trim(),
      extra: DOM.itemExtra.value.trim(),
      amount: DOM.itemAmount.value.trim(),
      priority: DOM.itemPriority.value,
      type: DOM.itemType.value,
      verification: DOM.itemVerification ? DOM.itemVerification.value.trim() : '',
      // Hotel
      checkInDate: DOM.itemCheckInDate ? DOM.itemCheckInDate.value : '',
      checkInTime: DOM.itemCheckInTime ? DOM.itemCheckInTime.value : '',
      checkInAmPm: DOM.itemCheckInAmPm ? DOM.itemCheckInAmPm.value : 'PM',
      checkOutDate: DOM.itemCheckOutDate ? DOM.itemCheckOutDate.value : '',
      checkOutTime: DOM.itemCheckOutTime ? DOM.itemCheckOutTime.value : '',
      checkOutAmPm: DOM.itemCheckOutAmPm ? DOM.itemCheckOutAmPm.value : 'PM',
      // Rental
      rentalStart: DOM.itemRentalStart ? DOM.itemRentalStart.value : '',
      rentalStartTime: DOM.itemRentalStartTime ? DOM.itemRentalStartTime.value : '',
      rentalStartAmPm: DOM.itemRentalStartAmPm ? DOM.itemRentalStartAmPm.value : 'PM',
      rentalEnd: DOM.itemRentalEnd ? DOM.itemRentalEnd.value : '',
      rentalEndTime: DOM.itemRentalEndTime ? DOM.itemRentalEndTime.value : '',
      rentalEndAmPm: DOM.itemRentalEndAmPm ? DOM.itemRentalEndAmPm.value : 'PM',
      // Construction
      constructionStart: DOM.itemConstructionStart ? DOM.itemConstructionStart.value : '',
      constructionEnd: DOM.itemConstructionEnd ? DOM.itemConstructionEnd.value : '',
      // HR
      joiningDate: DOM.itemJoiningDate ? DOM.itemJoiningDate.value : '',
      employmentStatus: DOM.itemEmploymentStatus ? DOM.itemEmploymentStatus.value : 'Active',
      resignDate: DOM.itemResignDate ? DOM.itemResignDate.value : '',
      jobRole: DOM.itemJobRole ? DOM.itemJobRole.value.trim() : '',
      monthlySalary: DOM.itemMonthlySalary ? DOM.itemMonthlySalary.value.trim() : '$0',
      // Banking
      openingDate: DOM.itemOpeningDate ? DOM.itemOpeningDate.value : '',
      closingDate: DOM.itemClosingDate ? DOM.itemClosingDate.value : '',
      transactionType: DOM.itemTransactionType ? DOM.itemTransactionType.value.trim() : ''
    };
    
    templates.push(template);
    saveTemplates();
    alert(`✅ Template "${name}" saved!`);
  }

  function loadTemplate() {
    if (templates.length === 0) {
      alert('📭 No templates saved.');
      return;
    }
    
    let msg = '📋 Templates:\n\n';
    templates.forEach((t, i) => {
      msg += `${i+1}. ${t.name}\n   📍 ${t.location || 'No location'}\n\n`;
    });
    msg += 'Enter number to load:';
    
    const choice = prompt(msg);
    if (choice) {
      const idx = parseInt(choice) - 1;
      if (idx >= 0 && idx < templates.length) {
        const t = templates[idx];
        DOM.itemName.value = t.name;
        DOM.itemLocation.value = t.location || '';
        DOM.itemAddress.value = t.address || '';
        DOM.itemContact.value = t.contact || '';
        DOM.itemTime.value = t.time || '';
        DOM.itemAmPm.value = t.ampm || 'PM';
        DOM.itemIncharge.value = t.incharge || '';
        DOM.itemInchargePhone.value = t.inchargePhone || '';
        DOM.itemExtra.value = t.extra || '';
        DOM.itemAmount.value = t.amount || '';
        DOM.itemPriority.value = t.priority || 'Medium';
        DOM.itemType.value = t.type || 'General';
        if (DOM.itemVerification) DOM.itemVerification.value = t.verification || '';
        // Hotel
        if (DOM.itemCheckInDate) DOM.itemCheckInDate.value = t.checkInDate || '';
        if (DOM.itemCheckInTime) DOM.itemCheckInTime.value = t.checkInTime || '';
        if (DOM.itemCheckInAmPm) DOM.itemCheckInAmPm.value = t.checkInAmPm || 'PM';
        if (DOM.itemCheckOutDate) DOM.itemCheckOutDate.value = t.checkOutDate || '';
        if (DOM.itemCheckOutTime) DOM.itemCheckOutTime.value = t.checkOutTime || '';
        if (DOM.itemCheckOutAmPm) DOM.itemCheckOutAmPm.value = t.checkOutAmPm || 'PM';
        // Rental
        if (DOM.itemRentalStart) DOM.itemRentalStart.value = t.rentalStart || '';
        if (DOM.itemRentalStartTime) DOM.itemRentalStartTime.value = t.rentalStartTime || '';
        if (DOM.itemRentalStartAmPm) DOM.itemRentalStartAmPm.value = t.rentalStartAmPm || 'PM';
        if (DOM.itemRentalEnd) DOM.itemRentalEnd.value = t.rentalEnd || '';
        if (DOM.itemRentalEndTime) DOM.itemRentalEndTime.value = t.rentalEndTime || '';
        if (DOM.itemRentalEndAmPm) DOM.itemRentalEndAmPm.value = t.rentalEndAmPm || 'PM';
        // Construction
        if (DOM.itemConstructionStart) DOM.itemConstructionStart.value = t.constructionStart || '';
        if (DOM.itemConstructionEnd) DOM.itemConstructionEnd.value = t.constructionEnd || '';
        // HR
        if (DOM.itemJoiningDate) DOM.itemJoiningDate.value = t.joiningDate || '';
        if (DOM.itemEmploymentStatus) DOM.itemEmploymentStatus.value = t.employmentStatus || 'Active';
        if (DOM.itemResignDate) DOM.itemResignDate.value = t.resignDate || '';
        if (DOM.itemJobRole) DOM.itemJobRole.value = t.jobRole || '';
        if (DOM.itemMonthlySalary) DOM.itemMonthlySalary.value = t.monthlySalary || '$0';
        // Banking
        if (DOM.itemOpeningDate) DOM.itemOpeningDate.value = t.openingDate || '';
        if (DOM.itemClosingDate) DOM.itemClosingDate.value = t.closingDate || '';
        if (DOM.itemTransactionType) DOM.itemTransactionType.value = t.transactionType || '';
        
        alert(`✅ Template "${t.name}" loaded!`);
      }
    }
  }

  // ============================================
  // Quick Add
  // ============================================
  function quickAdd() {
    const system = SYSTEMS[currentSystem];
    const label = system.isHotel ? 'guest' : system.isRental ? 'customer' : system.isHR ? 'employee' : system.isBanking ? 'account holder' : 'name';
    const name = prompt(`📝 Enter ${label}:`);
    if (!name || name.trim() === '') return;
    
    const date = DOM.itemDate.value || getTodayString();
    
    const newItem = {
      id: generateId(),
      name: name.trim(),
      bookedBy: 'Quick Add',
      contact: '',
      location: 'TBD',
      address: '',
      date: system.isSchool || system.isConstruction || system.isHR || system.isBanking ? '' : date,
      time: system.isSchool || system.isConstruction || system.isHR || system.isBanking ? '' : '',
      ampm: system.isSchool || system.isConstruction || system.isHR || system.isBanking ? '' : 'PM',
      incharge: '',
      inchargePhone: '',
      extra: system.isHotel ? '1' : '',
      amount: '$0',
      priority: 'Medium',
      type: system.fields.typeOptions ? system.fields.typeOptions[0] : 'General',
      verification: '',
      system: currentSystem,
      createdAt: new Date().toISOString(),
      // Hotel
      checkInDate: '',
      checkInTime: '',
      checkInAmPm: 'PM',
      checkOutDate: '',
      checkOutTime: '',
      checkOutAmPm: 'PM',
      // Rental
      rentalStart: '',
      rentalStartTime: '',
      rentalStartAmPm: 'PM',
      rentalEnd: '',
      rentalEndTime: '',
      rentalEndAmPm: 'PM',
      // Construction
      constructionStart: '',
      constructionEnd: '',
      // HR
      joiningDate: '',
      employmentStatus: 'Active',
      resignDate: '',
      jobRole: '',
      monthlySalary: '$0',
      employeePhoto: '',
      // Banking
      openingDate: '',
      closingDate: '',
      transactionType: ''
    };
    
    items.push(newItem);
    saveItemHistory(newItem.id, newItem);
    saveAndRender();
    switchTab('items');
  }

  // ============================================
  // Emergency Kit
  // ============================================
  function showEmergencyKit() {
    let msg = '🚨 EMERGENCY KIT\n';
    msg += '═'.repeat(30) + '\n\n';
    msg += `📶 WiFi: ${emergencyKit.wifiName || 'Not set'}\n`;
    msg += `🔑 Password: ${emergencyKit.wifiPassword || 'Not set'}\n\n`;
    msg += `📞 Contact 1: ${emergencyKit.emergencyContact1 || 'Not set'}\n`;
    msg += `📞 Contact 2: ${emergencyKit.emergencyContact2 || 'Not set'}\n\n`;
    msg += `📝 Notes:\n${emergencyKit.venueNotes || 'No notes'}\n`;
    
    const input = prompt(msg + '\n\nUpdate? (Format: WiFi,Password,Contact1,Contact2,Notes)');
    
    if (input && input !== 'null') {
      const parts = input.split(',').map(s => s.trim());
      if (parts.length >= 5) {
        emergencyKit.wifiName = parts[0] || emergencyKit.wifiName;
        emergencyKit.wifiPassword = parts[1] || emergencyKit.wifiPassword;
        emergencyKit.emergencyContact1 = parts[2] || emergencyKit.emergencyContact1;
        emergencyKit.emergencyContact2 = parts[3] || emergencyKit.emergencyContact2;
        emergencyKit.venueNotes = parts.slice(4).join(', ') || emergencyKit.venueNotes;
        saveEmergencyKit();
        alert('✅ Emergency Kit updated!');
      }
    }
  }

  // ============================================
  // Today Items
  // ============================================
  function showTodayItems() {
    const todayStr = getTodayString();
    const todayItems = items.filter(item => item.date === todayStr);
    
    if (todayItems.length === 0) {
      alert('🎯 No items today!');
      return;
    }
    
    let msg = '📌 Today\'s Items:\n\n';
    todayItems.forEach((item, i) => {
      msg += `${i+1}. ${getPriorityIcon(item.priority)} ${item.name}\n`;
      msg += `   📍 ${item.location}\n`;
      msg += `   ⏰ ${item.time || '--:--'} ${item.ampm || ''}\n`;
      if (item.extra) msg += `   📝 ${item.extra}\n`;
      if (item.incharge) msg += `   👤 ${item.incharge}\n`;
      if (item.contact) msg += `   📞 ${item.contact}\n`;
      msg += '\n';
    });
    alert(msg);
  }

  // ============================================
  // Sample Data - Hotel Specific
  // ============================================
  function addSampleItems() {
    const today = getTodayString();
    const future = new Date();
    future.setDate(future.getDate() + 3);
    const futureStr = future.toISOString().split('T')[0];
    const future2 = new Date();
    future2.setDate(future2.getDate() + 5);
    const futureStr2 = future2.toISOString().split('T')[0];
    
    const samples = [
      {
        id: generateId(),
        name: 'John Smith',
        bookedBy: 'Sarah Johnson',
        contact: '+1 555 1234',
        location: 'Room 101',
        address: '123 Main St, San Francisco, CA 94105',
        date: today,
        time: '09:30',
        ampm: 'AM',
        checkInDate: today,
        checkInTime: '12:00',
        checkInAmPm: 'PM',
        checkOutDate: futureStr,
        checkOutTime: '11:00',
        checkOutAmPm: 'AM',
        incharge: 'Mike Chen',
        inchargePhone: '+1 555 7890',
        extra: '2',
        amount: '$350.00',
        priority: 'High',
        type: 'Deluxe Room',
        verification: 'Passport: P12345678',
        system: currentSystem,
        createdAt: new Date().toISOString(),
        rentalStart: '',
        rentalStartTime: '',
        rentalStartAmPm: 'PM',
        rentalEnd: '',
        rentalEndTime: '',
        rentalEndAmPm: 'PM',
        constructionStart: '',
        constructionEnd: '',
        joiningDate: '',
        employmentStatus: 'Active',
        resignDate: '',
        jobRole: '',
        monthlySalary: '$0',
        employeePhoto: '',
        openingDate: '',
        closingDate: '',
        transactionType: ''
      },
      {
        id: generateId(),
        name: 'Emma Wilson',
        bookedBy: 'David Wilson',
        contact: '+1 555 5678',
        location: 'Room 205',
        address: '456 Oak Ave, New York, NY 10012',
        date: futureStr,
        time: '14:00',
        ampm: 'PM',
        checkInDate: futureStr,
        checkInTime: '15:00',
        checkInAmPm: 'PM',
        checkOutDate: futureStr2,
        checkOutTime: '10:00',
        checkOutAmPm: 'AM',
        incharge: 'Alex Rivera',
        inchargePhone: '+1 555 1122',
        extra: '1',
        amount: '$250.00',
        priority: 'Medium',
        type: 'Single Room',
        verification: 'Driving License: DL12345678',
        system: currentSystem,
        createdAt: new Date().toISOString(),
        rentalStart: '',
        rentalStartTime: '',
        rentalStartAmPm: 'PM',
        rentalEnd: '',
        rentalEndTime: '',
        rentalEndAmPm: 'PM',
        constructionStart: '',
        constructionEnd: '',
        joiningDate: '',
        employmentStatus: 'Active',
        resignDate: '',
        jobRole: '',
        monthlySalary: '$0',
        employeePhoto: '',
        openingDate: '',
        closingDate: '',
        transactionType: ''
      }
    ];
    
    samples.forEach(item => {
      items.push(item);
      saveItemHistory(item.id, item);
    });
    saveAndRender();
  }

  // ============================================
  // Initialization
  // ============================================
  function init() {
    hideSplashScreen();
    
    DOM.selectionPage.classList.remove('hide');
    document.getElementById('appContainer').style.display = 'none';
    
    loadAllData();
    
    if (!DOM.itemDate.value) {
      DOM.itemDate.value = getTodayString();
    }
    
    // Set default dates for hotel check-in/out
    if (DOM.itemCheckInDate) {
      DOM.itemCheckInDate.value = getTodayString();
    }
    if (DOM.itemCheckOutDate) {
      const future = new Date();
      future.setDate(future.getDate() + 2);
      DOM.itemCheckOutDate.value = future.toISOString().split('T')[0];
    }
    
    if (items.length === 0) {
      addSampleItems();
    }
    
    renderItems();
    updateCounters();
    
    setTimeout(initializeMiniMap, 500);
    
    // --- Logo Upload ---
    if (DOM.uploadLogoBtn) {
      DOM.uploadLogoBtn.addEventListener('click', handleLogoUpload);
    }
    if (DOM.removeLogoBtn) {
      DOM.removeLogoBtn.addEventListener('click', removeLogo);
    }
    
    // --- Management Selection ---
    DOM.managementCards.forEach(card => {
      card.addEventListener('click', () => {
        const systemId = card.dataset.type;
        switchSystem(systemId);
      });
    });
    
    DOM.changeSystemBtn.addEventListener('click', () => {
      DOM.selectionPage.classList.remove('hide');
      document.getElementById('appContainer').style.display = 'none';
    });
    
    DOM.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        switchTab(tab.dataset.tab);
      });
    });
    
    DOM.saveProfileBtn.addEventListener('click', saveCompanyProfile);
    DOM.addItemBtn.addEventListener('click', addItem);
    DOM.quickAddBtn.addEventListener('click', quickAdd);
    DOM.templateSaveBtn.addEventListener('click', saveTemplate);
    DOM.templateLoadBtn.addEventListener('click', loadTemplate);
    DOM.emergencyBtn.addEventListener('click', showEmergencyKit);
    DOM.todayBtn.addEventListener('click', showTodayItems);
    DOM.darkModeToggle.addEventListener('click', toggleDarkMode);
    DOM.openMapPickerBtn.addEventListener('click', openMapPicker);
    DOM.closeMapPicker.addEventListener('click', closeMapPicker);
    DOM.confirmLocationBtn.addEventListener('click', confirmLocation);
    
    document.getElementById('mapPickerModal').addEventListener('click', function(e) {
      if (e.target === this) closeMapPicker();
    });
    
    DOM.langToggle.addEventListener('click', toggleLanguageDropdown);
    DOM.langOptions.forEach(btn => {
      btn.addEventListener('click', () => {
        changeLanguage(btn.dataset.lang);
      });
    });
    
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.language-selector')) {
        DOM.langDropdown.classList.remove('active');
      }
    });
    
    DOM.itemName.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        DOM.itemBookedBy.focus();
      }
    });
    
    console.log(`✅ Universal Management System v${APP.version} initialized`);
    console.log(`📊 ${items.length} items loaded`);
    console.log(`🌍 Language: ${currentLanguage}`);
    console.log(`📋 System: ${SYSTEMS[currentSystem]?.name}`);
    console.log(`🇮🇳 Made in Bharat`);
  }

  // ============================================
  // Start App
  // ============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();