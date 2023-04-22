import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactService";

const initialState = {
  contacts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get Contacts
export const getContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkAPI) => {
    try {
      return await contactService.getContacts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create Contact
export const createContact = createAsyncThunk(
  "contacts/create",
  async (ContactData, thunkAPI) => {
    try {
      return await contactService.createContact(ContactData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// update Contact
export const updateContact = createAsyncThunk(
    "contacts/update",
    async ({contactId, contactData}, thunkAPI) => {
      try {
        // console.log(contactData)
        // console.log(contactId)
        return await contactService.updateContact(contactId, contactData);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  // delete Contact
export const deleteContact = createAsyncThunk(
    "contacts/delete",
    async (ContactId, thunkAPI) => {
      try {
        return await contactService.deleteContact(ContactId);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateContact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contacts.forEach((issue, index) => {
          if (issue._id === action.payload._id) {
            state.contacts[index] = action.payload
          }
        });
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contacts = state.contacts.filter(
          (Contact) => Contact._id !== action.payload._id
        )
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
});

export const { reset } = contactSlice.actions;
export default contactSlice.reducer;
