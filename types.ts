import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  imageAlt: string;
}

export interface Testimonial {
  name: string;
  text: string;
  service: string;
}