module.exports = function (plop) {
  plop.setGenerator("nest-module", {
    description: "Generate a full NestJS module (model, controller, service, dto)",

    prompts: [
      {
        type: "input",
        name: "module",
        message: "Module name (e.g., records):",
      },
      {
        type: "input",
        name: "table",
        message: "Table name (e.g., records):",
      }
    ],

    actions: function (data) {
      const basePath = `src/${data.module}`;

      return [
        // Module
        {
          type: "add",
          path: `${basePath}/${data.module}.module.ts`,
          templateFile: "plop-templates/module.hbs",
        },

        // Controller
        {
          type: "add",
          path: `${basePath}/${data.module}.controller.ts`,
          templateFile: "plop-templates/controller.hbs",
        },

        // Service
        {
          type: "add",
          path: `${basePath}/${data.module}.service.ts`,
          templateFile: "plop-templates/service.hbs",
        },

        // Model
        {
          type: "add",
          path: `${basePath}/${data.module}.model.ts`,
          templateFile: "plop-templates/model.hbs",
        },

        // DTO folder
        {
          type: "add",
          path: `${basePath}/dto/create-{{module}}.dto.ts`,
          templateFile: "plop-templates/create-dto.hbs",
        },
        {
          type: "add",
          path: `${basePath}/dto/update-{{module}}.dto.ts`,
          templateFile: "plop-templates/update-dto.hbs",
        },
        {
          type: "add",
          path: `${basePath}/dto/index.ts`,
          template: `export * from './create-{{module}}.dto';\nexport * from './update-{{module}}.dto';`
        },
      ];
    }
  });
};
