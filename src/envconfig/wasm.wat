(module
  (func $envConfig_get
    (param $key i32)
    (result i32)
    (i32.const 0)
  )
  (func $envConfig_set
    (param $key i32)
    (param $value i32)
    (result i32)
    (i32.const 0)
  )
  (export "envConfig_get" (func $envConfig_get))
  (export "envConfig_set" (func $envConfig_set))
)