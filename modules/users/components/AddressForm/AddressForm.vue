<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col lg:flex-row gap-2">
      <div class="flex flex-col lg:flex-row gap-2 flex-1">
        <div class="flex flex-col gap-2 flex-1">
          <label for="cep">
            CEP
            <i
              v-if="loading"
              class="pi pi-spinner text-green-500 animate-spin"
            />
          </label>
          <InputText
            id="cep"
            v-model="address.zipCode"
            v-maska
            placeholder="00000-000"
            data-maska="#####-###"
            @blur="() => emit('trigger-address-search')"
          />
        </div>

        <div class="flex flex-col gap-2 flex-1">
          <label for="number">Número</label>
          <InputText id="number" v-model="address.number" placeholder="000" />
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-2">
      <div class="flex flex-col gap-2 flex-1">
        <label for="city">Cidade</label>
        <InputText id="city" v-model="address.city" placeholder="São Paulo" />
      </div>
      <div class="flex flex-col gap-2 flex-1">
        <label for="state">Estado</label>
        <InputText id="state" v-model="address.state" placeholder="SP" />
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-2">
      <div class="flex flex-col gap-2 flex-1">
        <label for="neighborhood">Bairro</label>
        <InputText
          id="neighborhood"
          v-model="address.neighborhood"
          placeholder="Jardim Paulista"
        />
      </div>
      <div class="flex flex-col gap-2 flex-1">
        <label for="complement">Complemento</label>
        <InputText
          id="complement"
          v-model="address.complement"
          placeholder="Apto, Bloco etc..."
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Address } from "@/modules/users/entities/Address/Address";

const props = defineProps<{
  loading: boolean
}>();

const emit = defineEmits<{
  (e: 'trigger-address-search'): void
}>();

const address = defineModel<Address>({
  required: true,
  default: {
    zipCode: '',
    number: '',
    street: '',
    city: '',
    state: '',
    neighborhood: '',
    complement: ''
  },
});
</script>