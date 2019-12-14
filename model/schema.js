const mongoose = require('mongoose');

const { Schema } = mongoose;
const ShopSchema = new Schema(
  {
    name: {
      index: true,
      required: true,
      type: Schema.Types.String
    },
    booking: Schema.Types.Number,
    works: {
      index: true,
      type: [
        {
          ref: 'Work',
          type: Schema.Types.ObjectId
        }
      ]
    },
    deletedAt: Schema.Types.Date
  },
  {
    timestamps: true
  }
);

const BookingSchema = new Schema(
  {
    shop_id: {
      required: true,
      ref: 'Shop',
      type: Schema.Types.ObjectId
    },
    user_id: {
      required: true,
      ref: 'User',
      type: Schema.Types.ObjectId
    },
    weekday: {
      required: true,
      type: Schema.Types.Number
    },
    booking_time: {
      required: true,
      type: Schema.Types.Date
    },
    deletedAt: Schema.Types.Date
  },
  {
    timestamps: true
  }
);

const UserSchema = new Schema(
  {
    name: {
      required: true,
      type: Schema.Types.String
    },
    email: {
      required: true,
      type: Schema.Types.String
    },
    deletedAt: Schema.Types.Date
  },
  {
    timestamps: true
  }
);

const WorkSchema = new Schema(
  {
    weekday: {
      required: true,
      type: Schema.Types.Number
    },
    startedAt: Schema.Types.Date,
    closedAt: Schema.Types.Date,
    shop_id: {
      required: true,
      ref: 'Shop',
      type: Schema.Types.ObjectId
    },
    deletedAt: Schema.Types.Date
  },
  {
    timestamps: true
  }
);

module.exports = {
  Shop: mongoose.model('Shop', ShopSchema),
  Booking: mongoose.model('Booking', BookingSchema),
  User: mongoose.model('User', UserSchema),
  Work: mongoose.model('Work', WorkSchema)
};
