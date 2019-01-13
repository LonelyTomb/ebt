<template>
  <div>
    <div class="js-upload" ref="dropZone">
      <div v-if="this.uploads.length == 0">
        <v-icon>cloud_upload</v-icon>
        <span class="uk-text-middle">Drop File or</span>
        <div class="custom-input">
          <input
            type="file"
            name="uploads"
            id="uploads"
            class="custom-file-input"
            ref="uploads"
            @change="fileChange()"
            :form="formid"
          >
          <v-btn flat color="info">click here to upload</v-btn>
        </div>
      </div>
      <div v-else class="file-selected">
        <span>{{this.uploads.name}}</span>
        <v-btn color="warning" @click="resetInput()" round>Cancel</v-btn>
      </div>
    </div>
    <!-- <progress id="js-progressbar" class="uk-progress" value="0" max="100"></progress> -->
  </div>
</template>

<script>
export default {
  name: "uploadWidget",
  props: {
    formid: String
  },
  data() {
    return {
      uploads: []
    };
  },
  mounted() {
    this.$emit("uploads", []);
    [
      ("drag",
      "dragstart",
      "dragend",
      "dragover",
      "dragenter",
      "dragleave",
      "drop")
    ].forEach(
      function(evt) {
        /*
        For each event add an event listener that prevents the default action
        (opening the file in the browser) and stop the propagation of the event (so
        no other elements open the file in the browser)
      */
        this.$refs.dropZone.addEventListener(
          evt,
          function(e) {
            e.preventDefault();
            e.stopPropagation();
          }.bind(this),
          false
        );
      }.bind(this)
    );
    this.$refs.dropZone.addEventListener(
      "drop",
      function(e) {
        /*
        Capture the files from the drop event and add them to our local files
        array.
      */
        this.uploads = e.dataTransfer.files[0];
        this.$emit("uploads", e.dataTransfer.files[0]);
      }.bind(this)
    );
  },
  methods: {
    resetInput() {
      this.uploads = [];
      this.$emit("uploads", []);
    },
    fileChange() {
      this.uploads = this.$refs.uploads.files[0];
      this.$emit("uploads", this.$refs.uploads.files[0]);
    }
  }
};
</script>
<style>
.js-upload {
  margin-bottom: 20px;
  padding: 30px 30px;
  background: transparent;
  border: 1px dashed #e5e5e5;
  text-align: center;
}
.custom-input {
  display: inline-block;
  position: relative;
  max-width: 100%;
  vertical-align: middle;
}
.custom-file-input {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  left: 0;
  -webkit-appearance: none;
  opacity: 0;
  cursor: pointer;
}
</style>
