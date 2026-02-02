
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPagenav } from "../lib/umbracoFetch";

export const fetchLayoutData = createAsyncThunk(
  "layout/fetchLayoutData",
  async () => {
    const data = await getPagenav("global");
    const logo = data?.properties?.logo ?? null;
    const navigation = await getPagenav("navigation");
    const design = await getPagenav("test");

    const footer = {
      footerItems: data?.properties?.footerItems ?? null,
      copyrightMessage: data?.properties?.copyrightMessage ?? null,
      siteCreditLabel: data?.properties?.siteCreditLabel ?? null,
      siteCreditLink: data?.properties?.siteCreditLink ?? null
    };

    return {
        logo,
      navigation,
      footer,
      design
    };
  }
);

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    loading: false,
    navigation: null,
    footerData: null,
    design: null,
    logo: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

  
      .addCase(fetchLayoutData.pending, (state) => {
        state.loading = true;
      })


      .addCase(fetchLayoutData.fulfilled, (state, action) => {
        state.loading = false;
        state.navigation = action.payload.navigation;
        state.footerData = action.payload.footer;
        state.logo = action.payload.logo;
        state.design = action.payload.design;
      })

      .addCase(fetchLayoutData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default layoutSlice.reducer;
