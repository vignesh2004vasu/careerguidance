import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: [true, "Question text is required"],
    trim: true,
  },
  options: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length === 4;
      },
      message: "Each question must have exactly 4 options",
    },
    required: [true, "Options are required"],
  },
  correctOption: {
    type: Number,
    required: [true, "Correct option is required"],
    min: 0,
    max: 3,
  },
});

const testSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Test name is required"],
      trim: true,
      unique: true,
    },
    difficultyLevel: {
      type: String,
      required: [true, "Difficulty level is required"],
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },
    numberOfQuestions: {
      type: Number,
      required: [true, "Number of questions is required"],
      default: 10,
    },
    duration: {
      type: Number, 
      required: [true, "Test duration is required"],
      min: 5,
      max: 180,
    },
    questions: {
      type: [questionSchema],
      validate: {
        validator: function (v) {
          return v.length === this.numberOfQuestions;
        },
        message: "Number of questions must match numberOfQuestions field",
      },
      required: [true, "Questions are required"],
    },
    category: {
      type: String,
      required: [true, "Test category is required"],
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.models.Test || mongoose.model("Test", testSchema);

export default Test;
