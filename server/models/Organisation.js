import mongoose from 'mongoose';

const organizationSchema = new mongoose.Schema({
  OrganizationName: {
    type: String,
    required: true,
  },
  TeamName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Organization = mongoose.model('Organization', organizationSchema);
