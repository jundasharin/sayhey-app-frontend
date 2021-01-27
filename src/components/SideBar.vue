<template>
  <section>
    <div
      class="d-flex align-items-center justify-content-between mt-4 title-app"
    >
      <h2>
        SayHey
      </h2>
      <div>
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            <img class="menu-bar" src="../assets/icons/menubar.svg" /><span
              class="sr-only"
              >Search</span
            >
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title-app h2 {
  color: #7e98df;
  font-weight: 500;
}
.menu-bar {
  height: 23px;
}
</style>
