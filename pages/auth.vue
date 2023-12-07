<template>
  <div id="AuthPage" class="w-full h-[100vh] h-screen pt-32">
    <div class="w-full">
      <div class="w-full flex items-center justify-center gap-2.5 p-2 mb-2">
        <img class="w-9" src="/threads-logo.png" />
        <span class="font-bold text-2xl text-white">Threads</span>
      </div>

      <div class="max-w-[350px] mx-auto px-2 text-white space-y-4">
        <div class="text-center">Login / Register</div>
        <button
          @click="login('github')"
          class="p-1.5 w-full border rounded-full text-lg font-semibold hover:bg-gray-500 hover:text-black hover:border-black"
        >
          <div class="flex items-center gap-2 justify-center">
            <img
              class="w-full max-w-[30px] rounded-full"
              src="/github-logo.png"
            />
            Github
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) {
    console.log("romaric info==", user.value);
    return navigateTo("/");
  }
});

const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    redirectTo: window.location.origin,
  });

  if (error) console.log(error);
};
</script>
